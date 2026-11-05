function scrn_charSelect() {
  scrn_background();
  scrn_envBar();
  for (let plr of plrArr) {
    plr.display();
    plr.disp_data();
    plr.disp_stats();
  }
  for (let b of buttons) {b.display()};
}

function layoutCharacters() {
  let spacing = roomData.width / (plrArr.length + 1);
  for (let i = 0; i < plrArr.length; i++) {
    plrArr[i].loc.x = spacing * (i + 1);
    plrArr[i].loc.y = roomData.height / 2;
  }
}

function makeStateButtons() {
  const size = 30;
  const offsetX = 100;
  const offsetY = 90;

  for (let plr of plrArr) {
    new Button(function () {plr.cycleState(-1)},
      plr.loc.x - offsetX - size / 2, plr.loc.y + offsetY - size / 2,
      size, size, arrowSprite(-1));

    new Button(function () {plr.cycleState(1)},
      plr.loc.x + offsetX - size / 2, plr.loc.y + offsetY - size / 2,
      size, size, arrowSprite(1));
  }
}

function makeEnvButtons() {
  const size = 24
  const y = 34
  const off = 80;
  const groups = [
    {x: roomData.width * 0.3,
      step: function (dir) { env.hour = (env.hour + dir + 24) % 24; } },
    {x: roomData.width * 0.7,
      step: function (dir) { env.weather = (env.weather + dir + weatherOptions.length) % weatherOptions.length; } },
  ];
  for (let g of groups) {
    new Button(function () {g.step(-1)}, g.x - off - size / 2, y - size / 2, size, size, arrowSprite(-1));
    new Button(function () {g.step(1)}, g.x + off - size / 2, y - size / 2, size, size, arrowSprite(1));
  }
}

function scrn_envBar() {
  const xHour = roomData.width * 0.3;
  const xWeather = roomData.width * 0.7;
  push();
  noStroke();
  fill(20);
  rect(0, 0, width, 64);

  textAlign(CENTER, CENTER);
  textSize(11);
  fill(150);
  text("HOUR", xHour, 10);
  text("WEATHER", xWeather, 10);

  textSize(18);
  fill(255);
  text(nf(env.hour, 2) + ":00", xHour, 36);
  text(weatherOptions[env.weather].label, xWeather, 36);
  pop();
}

function scrn_background(){
  image(backgrounds[weatherOptions[env.weather].label], 0, 0, roomData.width, roomData.height);
}
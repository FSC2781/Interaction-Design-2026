function preload(){
  /// JSONs /// 
  // Car data //
  loadJSON("https://farsapi.com/v1/statistics/summary?state=California&year=2023", gotData);
  loadJSON("https://farsapi.com/v1/statistics/summary?state=Texas&year=2023", gotData);
  loadJSON("https://farsapi.com/v1/statistics/summary?state=Florida&year=2023", gotData);
  loadJSON("https://farsapi.com/v1/statistics/summary?state=Georgia&year=2023", gotData);
  loadJSON("https://farsapi.com/v1/statistics/summary?state=North%20Carolina&year=2023", gotData);
  loadJSON("https://farsapi.com/v1/statistics/summary?state=District%20of%20Columbia&year=2023", gotData);
  loadJSON("https://farsapi.com/v1/statistics/summary?state=Rhode%20Island&year=2023", gotData);
  loadJSON("https://farsapi.com/v1/statistics/summary?state=Vermont&year=2023", gotData);

  flagImgs["California"] = loadImage("assets/California.png");
  flagImgs["Texas"] = loadImage("assets/Texas.png");
  flagImgs["Florida"] = loadImage("assets/Florida.png");
  flagImgs["Georgia"] = loadImage("assets/Georgia.png");
  flagImgs["North Carolina"] = loadImage("assets/North_Carolina.png");
  flagImgs["Vermont"] = loadImage("assets/Vermont.png");
  flagImgs["Rhode Island"] = loadImage("assets/Rhode_Island.png");
  flagImgs["District of Columbia"] = loadImage("assets/District_of_Columbia.png");

  backgrounds["Clear"] = loadImage("assets/Clear.jpg");
  backgrounds["Cloudy"] = loadImage("assets/Cloudy.jpg");
  backgrounds["Rain"] = loadImage("assets/Rain.jpg");
  backgrounds["Fog"] = loadImage("assets/Fog.jpg");
};

function gotData_pop(result){
  console.log(result);
};

function gotData(result){
  strState = result.filters.state;
  stateArr.push(strState);
  console.log(stateArr[stateArr.length-1]);
  dataSet[strState] = result;
  console.log(result);
};

function setup() {
  canvas = createCanvas(960, 540);
  canvas.parent("game");

  let plrCount = 2;
  for (let i = 0; i < plrCount; i++) {
    new Character(int(random(stateArr.length)));
  }

  layoutCharacters();
  makeStateButtons();
  makeEnvButtons();
}

function mousePressed() {
  for (let b of buttons) {
    if (b.click()){break};
  }
}

function draw() {
  background(0);
  fill(255);
  scrn_charSelect();
}


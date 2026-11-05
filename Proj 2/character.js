class Character {
  constructor(_stateIdx) {
    this.stateIdx = _stateIdx;
    this.state = stateArr[_stateIdx];
    this.id = plrArr.length;
    this.loc = {x: 0, y: 0};
    plrArr.push(this);
  }

  cycleState(dir) {
    this.stateIdx = (this.stateIdx + dir + stateArr.length) % stateArr.length;
    this.state = stateArr[this.stateIdx];
  }

  display(){
    const radius = 50;
    const img = flagImgs[this.state];

    push();
    if (img && img.width > 0) {
      drawingContext.save();
      drawingContext.beginPath();
      drawingContext.arc(this.loc.x, this.loc.y, radius, 0, TWO_PI);
      drawingContext.clip();

      const scale = (radius * 2) / min(img.width, img.height);
      imageMode(CENTER);
      image(img, this.loc.x, this.loc.y, img.width * scale, img.height * scale);

      drawingContext.restore();
    } else {
      fill(100);
      noStroke();
      ellipse(this.loc.x, this.loc.y, radius * 2, radius * 2);
    }

    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(this.loc.x, this.loc.y, radius * 2, radius * 2);
    pop();
  };

  disp_data() {
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.state, this.loc.x, this.loc.y + 90);
    pop();
  }

  multipliers() {
    const data = dataSet[this.state];
    if (!data) {return null};
    return {hour: hourMultiplier(data, env.hour),
             weather: weatherMultiplier(data, env.weather) };
  }

  crashRate() {
    const data = dataSet[this.state];
    const pop = statePop[this.state];
    if (!data || !pop) {return null};
    const mult = this.multipliers();
    return (data.totals.crashes / pop) * mult.hour * mult.weather;
  }

  disp_stats() {
    const rate = this.crashRate();
    const x = this.loc.x + 70;
    const y = this.loc.y - 50;
    const w = 180, h = 124;

    const maxRate = 50;

    push();
    fill(30);
    stroke(120);
    rect(x, y, w, h);

    noStroke();
    fill(255);
    textAlign(LEFT, TOP);
    textSize(12);

    if (rate === null) {
      text("No data", x + 8, y + 8);
    } else {
      const m = this.multipliers();
      text("Fatal crashes per\n100,000 residents/yr:", x + 8, y + 8);
      const strRate = nf(rate * 100000, 1, 2)
      textSize(20 + (10 * (strRate/maxRate)));
      fill(255, 255 * (1 - (strRate/maxRate)), 255 * (1 - (strRate/maxRate)));
      text(strRate, x + 8, y + 40);

      fill(255);
      textSize(12);
      fill(180);
      text("Hour x" + nf(m.hour, 1, 2) + "   Weather x" + nf(m.weather, 1, 2), x + 8, y + 68);
      text("About 1 in " + nfc(round(1 / rate)), x + 8, y + 90);
    }
    pop();
  }
}
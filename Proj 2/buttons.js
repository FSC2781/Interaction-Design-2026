class Button {
  constructor(_func, _x, _y, _w, _h, _sprite) {
    this.func = _func;
    this.loc = { x: _x, y: _y };
    this.w = _w;
    this.h = _h;
    this.sprite = _sprite;
    buttons.push(this);
  }

  hovered() {
    return mouseX >= this.loc.x
     && mouseX <= this.loc.x + this.w
     && mouseY >= this.loc.y 
     && mouseY <= this.loc.y + this.h;
  }

  display(_alpha=1) {
    push();
    let alpha = _alpha * 255;
    translate(this.loc.x, this.loc.y);
    this.sprite(this.w, this.h, alpha, this.hovered());
    pop();
  }

  click() {
    if (this.hovered()) {
      this.func();
      return true;
    }
    return false;
  }
}

function arrowSprite(dir) {
  return function (w, h, a, hovered) {
    noStroke();
    fill(hovered ? 255 : 180, a);
    if (dir < 0) {
      triangle(w, 0, 0, h / 2, w, h)
    } else {
      triangle(0, 0, w, h / 2, 0, h)
    };
  };
}
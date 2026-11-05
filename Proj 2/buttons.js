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

function arrowSprite(_dir) {
  return function (_w, _h, _alpha, _hovered) {
    noStroke();
    fill(_hovered ? 255 : 180, _alpha);
    if (_dir < 0) {
      triangle(_w, 0, 0, _h / 2, _w, _h)
    } else {
      triangle(0, 0, _w, _h / 2, 0, _h)
    };
  };
}
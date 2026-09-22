class Barista{
  constructor(){
    this.x = cafe.line.start.x;
    this.y = cafe.line.start.y-100;
    this.sprite = img_barista;
  };

  display(){
    image(this.sprite, this.x, this.y);
  };
};
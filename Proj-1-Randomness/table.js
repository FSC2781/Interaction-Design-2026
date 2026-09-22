class Table{
  constructor(_x, _y){
    this.x = _x+150;
    this.y = _y;
    this.sprite = img_table;
    this.chairs = [];
    for (let i=0; i < 2; i++){
      this.chairs.push(new Seat(this.x-50 + (100*i), this.y-50));
      arr_chairs.push(this.chairs[i]);
    };
  };

  display(){
    imageMode(CENTER);

    // for (let i=0; i < this.chairs.length; i++){
    //   this.chairs[i].display();
    // }
    
    image(this.sprite, this.x, this.y);
  };

  get_chair(){
    if (!this.chairs[0].occupied){
      this.chairs[0].occupied = true;
      return this.chairs[0];
    } else if (!this.chairs[1].occupied){
      this.chairs[1].occupied = true;
      return this.chairs[1];
    } else {
      return false;
    };
  }
};

class Seat{
  constructor(_x, _y){
    this.x = _x;
    this.y = _y;
    this.sprite = img_chair;
    this.occupied = false;
    this.row = {
      x: this.x,
      y: room.height/2
    };
  }
  display(){
    imageMode(CENTER);
    image(this.sprite, this.x, this.y);
  };
}
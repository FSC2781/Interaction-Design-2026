/// - CAFE CODE - ///
class Cafe{
  constructor(){
    this.line = {
      start: {
        name: "Line Start",
        x: room.width*(0.5/10),
        y: 175},
      corner: {
        name: "Line Corner",
        x: spawn_pos.x,
        y:200},
      customers: [],
      moving: true
    };
    this.counter_sprite = img_counter;
  };

  display(){
    imageMode(CENTER);
    image(this.counter_sprite, this.line.start.x+125, 100);
  };

  get_lineSpot(_spot){
    if (_spot == null){
      let offset = this.line.customers.length * 100;
      let _name = "Line Spot";
      let _x = this.line.start.x + (offset);
      let _y = this.line.start.y;
      return {name: "Line Spot", x: _x, y:_y};
    } else {
      let offset = _spot * 100;
      let _name = "Line Spot";
      let _x = this.line.start.x + (offset);
      let _y = this.line.start.y;
      return {name: "Line Spot", x: _x, y:_y};
    };
  };

  remove_customer(){
    this.line.customers[0].inLine = false
    this.line.customers.splice(0, 1);
  };

  add_customer(_customer){
    _customer.inLine = true;
    _customer.lineSpot = this.line.customers.length;
    this.line.customers.push(_customer);
    print("Spot in line: " + str(_customer.lineSpot));
  };

  behavior(){
    if (this.line.customers.length > 0){
      if (this.line.customers[0].x <= this.line.start.x){
        this.line.moving = true;
        this.line.customers[0].order_item();
        this.remove_customer();
      } else {
        for (let i=0; i < this.line.customers.length; i++){
          this.line.customers[i].goTo_line();
        };
      };
    };
  };
};


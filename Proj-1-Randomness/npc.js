class NPC{
  constructor(sprite, name="NPC", want=null, id=0, x=-400, y=-400){
    this.name = name;
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.inLine = false;
    this.destination = null;
    this.speed = 2;
    this.order = null;
    this.want = want;
    this.id = id;
    this.ordered = false;
    this.walking = false;
    this.inFront = false;
    this.lineSpot = null;
    this.seated = false;
  };

  spawn(){
    this.x = spawn_pos.x;
    this.y = spawn_pos.y+10;
  };
  
  display(){
    imageMode(CENTER);

    //print("NPC: " + str(this.x));
    if (!this.seated){
      image(arr_NPC_spr[this.sprite]["side"], this.x, this.y);
      print("Not Seated");
    } else {
      image(arr_NPC_spr[this.sprite]["front"], this.x, this.y);
      print("SEATTED");
      print("SEATTED");
    };
    

    if (this.order){
      this.order.item.x = this.x;
      this.order.item.y = this.y;
      this.order.item.display();
    };
  };

  goTo_line(){
    if (this.destination == null){
      this.destination = cafe.line.corner;
    } else if (this.destination == cafe.line.corner){
      this.walking = true;
      if (this.move(0, 1)){
        this.destination = cafe.get_lineSpot(this.lineSpot);
      }
    //} else if (this.destination == cafe.line.start){
    } else if (this.destination.name == "Line Spot"){
      //print("destination == get_lineSpot()");
      this.walking = true;
      this.destination = cafe.get_lineSpot();
      if (this.move(-1, -1)){
        //print("True");
        this.inLine = true;
        cafe.add_customer(this);
        //cafe.line.customers.push(this);
        this.destination = null;
      } else {
        this.walking = false;
      };
    };
  };

  goTo_nextSpot(){
    
  }

  goTo_seat(){
    if (this.destination == null){
      while (!this.destination){
        let tableNum = int(random(arr_tables.length));
        this.destination = arr_tables[tableNum].get_chair();
        if (!this.destination){
          //print("No chair available");
        };
      };
    } else if (this.destination != null){
      this.walking = true;
      if (this.move(1, 1)){
        //this.destination = cafe.get_lineSpot();
      } else {
        this.seated = true;
      }
    //} else if (this.destination == cafe.line.start){
    }
    // else if (this.destination.name == "Line Spot"){
    //   //print("destination == get_lineSpot()");
    //   this.destination = cafe.get_lineSpot();
    //   if (this.move(-1, -1)){
    //     print("True");
    //     //this.inLine = true;
    //     //cafe.line.customers.push(this);
    //     this.destination = null;
    //     this.seated = true;
    //   } else {
    //     this.walking = false;
    //     this.seated = true;
    //   };
    // };
  };

  move(_dirX, _dirY){
    if (this.destination != null){
      let _xReached = false;
      let _yReached = false;
      
      if ((this.y <= this.destination.y-this.speed) || (this.y >= this.destination.y+this.speed)){
        this.y+=1*_dirY*this.speed;
      } else {_yReached = true};
      if ((this.x <= this.destination.x-this.speed) || (this.x >= this.destination.x+this.speed)){
        this.x+=1*_dirX*this.speed;
      } else {_xReached = true}
      if (_xReached && _yReached){
        return true /// Reached destination
      } else {
        //print("xReached: " + str(_xReached) + "\nyReached: " + str(_yReached));
      };
    } else {
      return null
    };
  };

  order_item(){
    this.order = new Order(this.name, this.want)
    this.ordered = true;
    this.display_order();
    //this.ordr
  };

  display_order(){
    rectMode(CENTER);
    rect(this.x+50, this.y-50, 40, 30);
    imageMode(CENTER);
    print("egtImage(): " + this.order.getImage());
    image(this.order.getImage(), this.x+50, this.y-50);
  };

  behavior(){
    if (!this.inLine && !this.ordered){
      this.goTo_line();
    // } else if (this.inLine && !this.inFront){ 
      // if (cafe.line.moving){
      //   this.goTo_line();
      // }
    }else if (!this.inLine && this.ordered){
      //print("Going to seat");
      this.goTo_seat();
    } else {
      this.seated = true;
    }
    //print("inLine: " + this.inLine + "; ordered: " + this.ordered);
  };
};
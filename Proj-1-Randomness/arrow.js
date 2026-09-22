class Arrow{
  constructor(_x, _y){
    this.x = _x;
    this.y = _y;
    this.offset = 10;
    this.startPos = this.x;
    this.timeElapsed = 0;
    this.offsetTime = 10;
    this.dir = 1;
  };

  display(){
    push()
    if (!door.check_cooldown()){
      tint(255, 255);
      image(img_arrow, this.x, this.y);
    } else {
      tint(255, 50);
      image(img_arrow, this.x, this.y);
    };
    pop();
  };

  tick(){
    if (!door.check_cooldown()){
      this.timeElapsed += clock.get_deltaTime();
      if (this.x >= this.startPos + this.offset){
        this.dir = -1;
        this.timeElapsed = clock.get_deltaTime();
        //print("SWITCH TO LEFT");
      } else if (this.x <= this.startPos - this.offset){
        this.dir = 1;
        this.timeElapsed = clock.get_deltaTime();
        //print("SWITCH TO RIGHT");
      };
      
      let shift = ((this.timeElapsed/this.offsetTime) * this.offset) * this.dir
      //print("timeElapsed: " + this.timeElapsed + "\noffsetTime: " + this.offsetTime + "\noffset: " + this.offset);
      this.x += shift;
      //print("shift: " + shift);
      //print("Arrow.x: " + str(this.x) + "\ntimeElapsed: " + this.timeElapsed);
    };
    
  }
};
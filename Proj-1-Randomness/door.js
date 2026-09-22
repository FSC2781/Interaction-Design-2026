class Door{
  constructor(sprite, x=spawn_pos.x, y=spawn_pos.y){
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.size = {width: 50, height: 100};
    this.lastSpawnTime = 1;
  };

  display(){
    imageMode(CENTER);
    image(this.sprite, this.x, this.y);
  };

  collide(_x, _y){
    let bounds = {
      xLeft: this.x - (this.size.width/2),
      xRight: this.x + (this.size.width/2),
      yTop: this.y - (this.size.height/2),
      yBottom: this.y + (this.size.height/2)
    };

    //print("xLeft: " + str(bounds.xLeft) + "; mouseX: " + str(mouseX) + "; xRight: " + str(bounds.xRight));
    
    if ((_x > bounds.xLeft && _x < bounds.xRight) && (_y > bounds.yTop && _y < bounds.yBottom)){
      return true;
    } else 
    {
      
      return false
    };
  };

  spawn_NPC(){
    if (!this.check_cooldown()){
      let sprNum = int(random(arr_NPC_paths.length));
      let _id = arr_NPC_names.length;
      let sprNumItem = int(random(arr_items_spr.length));
      let newItem = new Item(sprNumItem);
      
      let newNPC = new NPC(sprNum, arr_NPC_names[_id], newItem, _id);
      
      newNPC.spawn();
      arr_NPCs.push(newNPC);
      
      this.lastSpawnTime = clock.get_time();
    } else {
      //print("time: " + str(clock.get_time()));
      //print("last: " + str(this.lastSpawnTime));
    }
  };

  check_cooldown(){
    if ((clock.get_time() - this.lastSpawnTime) > 1 && arr_NPCs.length < 6){
      return false;
    } else {
      return true;
    }
  }
};
class Item{
  constructor(_sprite){
    this.x = null;
    this.y = null;
    this.sprite = arr_items_spr[_sprite];
    this.offset = {x: 10, y: 10};
    print("_sprite: " + _sprite);
    print("this.sprite: " + this.sprite);
  };

  display(){
    image(this.sprite, this.x + this.offset.x, this.y - this.offset.y);
  };
}

class Order{
  constructor(_name, _item){
    this.name = _name;
    this.item = _item;
  };

  getImage(){
    return this.item.sprite;
  }
}
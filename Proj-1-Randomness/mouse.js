function mousePressed(){
  //print("CLICKED");
  if (door.collide(mouseX, mouseY)){
    //print("Clicking on door");
    door.spawn_NPC();
  };
};
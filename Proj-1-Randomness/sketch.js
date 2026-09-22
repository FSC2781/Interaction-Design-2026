function draw() {
  background('#94C9A9');

  clock.tick();
  //print(clock.get_time());
  //print("Time Elapsed: " + str(seconds));

  barista.display();
  cafe.display();
  door.display();
  
  arrow.display();
  arrow.tick();

  for (let i=0; i < arr_chairs.length; i++){
    arr_chairs[i].display();
  };
  
  for (let i=0; i < arr_NPCs.length; i++){
    arr_NPCs[i].display();
    arr_NPCs[i].behavior();
  };
  
  for (let i=0; i < arr_tables.length; i++){
    arr_tables[i].display();
  };

  cafe.behavior();
}


async function setup() {
  /// ROOM DATA ///
  room = {
    width: 960,
    height: 540,
  };
  spawn_pos = {
    x: room.width * (9 / 10),
    y: 100,
  };

  createCanvas(room.width, room.height);

  /// IMAGES ///
  img_door = await loadImage("/Assets/Decor/door.png");
  img_counter = await loadImage("/Assets/Decor/counter.png");
  img_barista = await loadImage("/Assets/NPC/barista.png");
  img_item = await loadImage("/Assets/items/dcc_frap.png");
  img_table = await loadImage("/Assets/Decor/table.png");
  img_chair = await loadImage("/Assets/Decor/chair.png");
  img_arrow = await loadImage("/Assets/Decor/arrow.png");

  // NPCs //
  // arr_NPC_spr_S_paths = [
  //   "/Assets/NPC/NPC-side-00.png",
  //   "/Assets/NPC/NPC-side-01.png"
  //               ];
  // // arr_NPC_spr.push(img_npc0F)

  // // img_npc0S = await loadImage("/Assets/NPC/NPC-front-00.png");
  // arr_NPC_spr_F_paths = [
  //   "/Assets/NPC/NPC-front-00.png",
  //   "/Assets/NPC/NPC-front-01.png"
  // ];

  arr_NPC_paths = [
    {
      "side": "/Assets/NPC/NPC-side-00.png",
      "front": "/Assets/NPC/NPC-front-00.png"
    },
    {
      "side": "/Assets/NPC/NPC-side-01.png",
      "front": "/Assets/NPC/NPC-front-01.png"
    },
    {
      "side": "/Assets/NPC/NPC-side-02.png",
      "front": "/Assets/NPC/NPC-front-02.png"
    },
    {
      "side": "/Assets/NPC/NPC-side-03.png",
      "front": "/Assets/NPC/NPC-front-03.png"
    }
  ];
  print("0: " + arr_NPC_paths[0]);
  print("1: " + arr_NPC_paths[1]);
  // for (let i=0; i < 1; i++){
  //   let sprNameS = "/Assets/NPC/NPC-side-0" + i + ".png";
  //   let sprNameF = "/Assets/NPC/NPC-front-0" + i + ".png";
  //   arr_NPC_paths.push({"side": sprNameS, "front": sprNameF});
  // };

  arr_NPC_spr = [];
  let loadPromises = [];

  for (let i = 0; i < arr_NPC_paths.length; i++) {
    loadPromises.push(
      Promise.all([
        loadImage(arr_NPC_paths[i]["side"]),
        loadImage(arr_NPC_paths[i]["front"])
      ]).then(([side, front]) => {
        arr_NPC_spr[i] = { "side": side, "front": front };
      })
    );
  }
  
  await Promise.all(loadPromises);
  print(arr_NPC_spr[0]);
  print(arr_NPC_spr[1]);
  
  
  // arr_NPC_spr = [];
  // for (let i=0; i < 1; i++){
  //   //let tag = i;
  //   let sprName = "/Assets/NPC/NPC-side-0" + i + ".png";
  //   //let sprName = "/Assets/NPC/NPC-side-00.png"
  //   console.log(JSON.stringify(sprName), sprName.length);
  //   let newSprite = await loadImage(sprName);
  //   arr_NPC_spr.push(newSprite)
    
  // };

  
  // Items
  arr_items_paths = [
    "/Assets/items/drinks_00.png",
    "/Assets/items/drinks_01.png",
    "/Assets/items/drinks_02.png",
    "/Assets/items/drinks_03.png",
    "/Assets/items/drinks_04.png",
    "/Assets/items/drinks_05.png",
    "/Assets/items/drinks_06.png",
    "/Assets/items/drinks_07.png"
  ];
  // for (let i=0; i < 1; i++){
  //   let sprNameS = "/Assets/NPC/NPC-side-0" + i + ".png";
  //   let sprNameF = "/Assets/NPC/NPC-front-0" + i + ".png";
  //   arr_NPC_paths.push({"side": sprNameS, "front": sprNameF});
  // };

  arr_items_spr = [];
  loadPromises = [];

  for (let i = 0; i < arr_items_paths.length; i++) {
    loadPromises.push(
      loadImage(arr_items_paths[i]).then((sprite) => {
        arr_items_spr[i] = sprite;
      })
    );
  };
  
  await Promise.all(loadPromises);
  
  /// CREATE OBJECTS ///
  door = new Door(img_door);
  cafe = new Cafe();
  //testItem = new Item(img_item);
  barista = new Barista();
  arrow = new Arrow(room.width*(4/5), room.height*(1.5/10));

  // Tables List //
  arr_chairs = [];
  arr_tables = [];
  for (let i=0; i < 3; i++){
    tableX = room.width*((i)*1/3);
    tableY = room.height*(8/10) + (50 * pow(-1, i));
    newTable = new Table(tableX, tableY);
    arr_tables.push(newTable);
  }
  

  // NPC List //
  arr_NPCs = [];
  arr_NPC_names = ["Lilac", "Sally", "Nook", "Bale"];
  for (let i=0; i < 0; i++){
    newNPC = new NPC(0, arr_NPC_names[i], testItem, i);
    newNPC.spawn();
    arr_NPCs.push(newNPC);
  }
  
  clock = new Clock();
}

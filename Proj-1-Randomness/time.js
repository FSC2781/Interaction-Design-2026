class Clock{
  constructor(){
    this.timeElapsed = 0;
  //print("Time Elapsed: " + str(seconds));
  }

  get_time(){
    return this.timeElapsed/1000;
  };

  tick(){
    this.timeElapsed+=deltaTime;
  }

  get_deltaTime(){
    return deltaTime/1000;
  };
};
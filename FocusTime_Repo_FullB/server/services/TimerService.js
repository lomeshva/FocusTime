class TimerService {
  constructor() {
    this.running=false;
    this.startTime=null;
  }

  start(){
    this.running=true;
    this.startTime=Date.now();
    console.log('Timer started:',this.startTime);
  }

  pause(){
    if(this.running){
      this.running=false;
      console.log('Timer paused');
    }
  }

  stop(){
    this.running=false;
    this.startTime=null;
    console.log('Timer stopped');
  }
}

module.exports = new TimerService();

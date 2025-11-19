const TimerService = require('../services/TimerService');

module.exports = {
  startSession: (req,res)=>{
    TimerService.start();
    res.json({message:'Session started', running:TimerService.running});
  },
  pauseSession: (req,res)=>{
    TimerService.pause();
    res.json({message:'Session paused', running:TimerService.running});
  },
  stopSession: (req,res)=>{
    TimerService.stop();
    res.json({message:'Session stopped', running:TimerService.running});
  }
};

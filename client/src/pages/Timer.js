import React, { useState } from 'react';
import sessionAPI from '../services/sessionAPI';

export default function Timer() {
  const [status, setStatus] = useState('idle');
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const start = async () => {
    await sessionAPI.start();
    setStatus('running');
    const id = setInterval(()=>setTimer(t=>t+1),1000);
    setIntervalId(id);
  };

  const pause = async () => {
    await sessionAPI.pause();
    setStatus('paused');
    clearInterval(intervalId);
  };

  const stop = async () => {
    await sessionAPI.stop();
    setStatus('stopped');
    clearInterval(intervalId);
    setTimer(0);
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>Time: {timer}s</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
      <p>Status: {status}</p>
    </div>
  );
}

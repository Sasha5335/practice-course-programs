import React, { useEffect, useState } from 'react';

function Timer() {
  const [time, setTimer] = useState(0);
  const [switcher, setSwitcher] = useState(true);

  const hour = Math.trunc((time / 60 / 60) % 60);
  const minut = Math.trunc((time / 60) % 60);
  const seconds = Math.trunc(time % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((time) => (switcher ? time + 1 : time));
    }, 1000);
    return function () {
      console.log('output');
      clearInterval(timer);
    };
  }, [switcher]);

  const switchPause = () => {
    setSwitcher(!switcher);
  };

  const clearTimer = () => {
    setTimer(time === 0);
  };

  return (
    <>
      <div>
        <h2>Timer</h2>
      </div>
      <div>
        <span>{hour < 10 ? `0${hour}` : hour}</span>:
        <span>{minut < 10 ? `0${minut}` : minut}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <br />
      <div>
        <button onClick={switchPause}>Pause</button>
        <button onClick={clearTimer}>Clear</button>
      </div>
    </>
  );
}

export default Timer;

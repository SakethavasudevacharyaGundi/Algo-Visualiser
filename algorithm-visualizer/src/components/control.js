import React from 'react';

const Controls = ({ play, pause, reset, setSpeed }) => {
  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      <input
        type="range"
        min="1"
        max="100"
        onChange={(e) => setSpeed(e.target.value)}
      />
    </div>
  );
};

export default Controls;

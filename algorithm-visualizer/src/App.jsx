import React, { useState, useEffect } from 'react';

function App() {
  const [bars, setBars] = useState([]);
  const [current, setCurrent] = useState(null); // To highlight current bar

  // Initialize bars with random heights
  useEffect(() => {
    resetBars();
  }, []);

  // Function to reset bars to new random values
  const resetBars = () => {
    const newBars = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
    setBars(newBars);
    setCurrent(null); // Reset highlight
  };

  // Bubble Sort function with visualization
  const bubbleSort = async () => {
    const barsArray = [...bars];
    for (let i = 0; i < barsArray.length; i++) {
      for (let j = 0; j < barsArray.length - i - 1; j++) {
        setCurrent(j); // Highlight the current bar
        if (barsArray[j] > barsArray[j + 1]) {
          // Swap
          [barsArray[j], barsArray[j + 1]] = [barsArray[j + 1], barsArray[j]];
          setBars([...barsArray]); // Update state to re-render
        }
        await new Promise((resolve) => setTimeout(resolve, 100)); // Pause to visualize the step
      }
    }
    setCurrent(null); // Reset highlight after sorting
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2em', margin: '20px 0' }}>Bubble Sort Visualizer</h1>
      <button onClick={resetBars}>Reset Bars</button>
      <button onClick={bubbleSort}>Sort</button>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {bars.map((height, index) => (
          <div
            key={index}
            style={{
              height: `${height * 3}px`,
              width: '20px',
              backgroundColor: current === index ? 'red' : 'teal',
              margin: '0 2px'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

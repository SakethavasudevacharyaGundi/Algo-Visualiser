import React, { useRef, useEffect } from 'react';

const Canvas = ({ algorithm, speed }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Example: Call the selected algorithm here with `ctx` and `speed`
  }, [algorithm, speed]);

  return <canvas ref={canvasRef} width={500} height={300}></canvas>;
};

export default Canvas;

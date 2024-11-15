import React from 'react';

const AlgorithmSelector = ({ setAlgorithm }) => {
  return (
    <select onChange={(e) => setAlgorithm(e.target.value)}>
      <option value="bubbleSort">Bubble Sort</option>
      <option value="mergeSort">Merge Sort</option>
      <option value="dijkstra">Dijkstra's Pathfinding</option>
    </select>
  );
};

export default AlgorithmSelector;

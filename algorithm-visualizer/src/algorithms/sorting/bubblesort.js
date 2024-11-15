// src/algorithms/sorting/bubbleSort.js

export const bubbleSortWithSteps = (array) => {
    const steps = [];
    const arr = [...array]; // Clone the array
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        steps.push({ type: 'compare', indices: [j, j + 1], array: [...arr] }); // Comparison step
  
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
          steps.push({ type: 'swap', indices: [j, j + 1], array: [...arr] }); // Swap step
        }
      }
    }
    
    return steps;
  };
  
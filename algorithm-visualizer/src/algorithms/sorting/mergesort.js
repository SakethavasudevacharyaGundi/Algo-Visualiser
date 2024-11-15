// src/algorithms/sorting/mergeSort.js

export const mergeSort = (array) => {
    const steps = [];
    
    // Helper function to merge two sorted halves
    const merge = (left, right, startIdx) => {
      let sorted = [];
      let i = 0, j = 0;
  
      while (i < left.length && j < right.length) {
        steps.push({ type: 'compare', indices: [startIdx + i, startIdx + left.length + j] });
        if (left[i] < right[j]) {
          sorted.push(left[i]);
          i++;
        } else {
          sorted.push(right[j]);
          j++;
        }
      }
  
      // Remaining elements
      while (i < left.length) sorted.push(left[i++]);
      while (j < right.length) sorted.push(right[j++]);
  
      steps.push({ type: 'merge', startIdx, mergedArray: [...sorted] });
      return sorted;
    };
  
    // Recursive merge sort function
    const recursiveMergeSort = (arr, startIdx = 0) => {
      if (arr.length <= 1) return arr;
  
      const mid = Math.floor(arr.length / 2);
      const left = recursiveMergeSort(arr.slice(0, mid), startIdx);
      const right = recursiveMergeSort(arr.slice(mid), startIdx + mid);
  
      return merge(left, right, startIdx);
    };
  
    recursiveMergeSort(array);
    return steps;
  };
  
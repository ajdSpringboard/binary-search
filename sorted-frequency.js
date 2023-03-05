function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let first = -1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === num) {
        first = mid;
        right = mid - 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    if (first === -1) {
      return -1;
    }
  
    let last = -1;
    left = first;
    right = arr.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === num) {
        last = mid;
        left = mid + 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return last - first + 1;
  }
  

module.exports = sortedFrequency
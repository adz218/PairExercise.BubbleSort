function split(wholeArray) {
  let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length/2));
  // console.log(`first half: ${firstHalf}`);
  let secondHalf = wholeArray.slice(Math.floor(wholeArray.length/2));
  // console.log(`second half: ${secondHalf}`);

  // console.log([firstHalf, secondHalf]);
  return [firstHalf, secondHalf];
}

function merge(left, right) {
  let leftIndex = 0
  let rightIndex= 0;
  let result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex ++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr){
  if(arr.length === 1) {
    return arr
  }

  return merge(mergeSort(split(arr)[0]), mergeSort(split(arr)[1]) )
}

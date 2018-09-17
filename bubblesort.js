class bubbleSort {
  constructor(arr) {
    this.arr = arr;
  }

  swap(x, y){
    return [y, x];
  }

  compare(x, y) {
    return x > y;
  }

  bubbleSort(){
    let loops = 0;
    let last = this.arr.length - 1;
    while (loops < this.arr.length) {
      for (let i = 0; i < last; i++) {
        if (this.compare(this.arr[i], this.arr[i+1])) {
          let swapped = this.swap(this.arr[i], this.arr[i+1]);
          this.arr[i] = swapped[0];
          this.arr[i+1] = swapped[1];
        }
      }
      --last;
      ++loops;
    }
    return this.arr;
  }


}

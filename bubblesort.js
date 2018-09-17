class bubbleSort {
  constructor(arr) {
    this.arr = arr;
  }

  swap(){

  }

  compare(){

  }

  bubbleSort(){
    let loops = 0;
    while (loops < this.arr.length) {
      for (let i = 0; i < this.arr.length - 1; i++) {
        if (this.compare(this.arr[i], this.arr[i+1])) {
          this.swap(this.arr[i], this.arr[i+1]);
        }
      }
    }
  }


}

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
  });
});




describe('Mergesort function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(mergeSort([10,12,1,2,3,20,15,40])).toEqual([1,2,3,10,12,15,20,40]);
  });
});

describe('Bubble Sort', function(){
  let unsortedArray = [];
  let bubbleSortObj = new bubbleSort(unsortedArray);
  let sortedArray = [];

  it('handles an empty array', function(){
    expect( bubbleSortObj.bubbleSort() ).toEqual( [] );
  });
});


describe('Bubble Sort', function(){
  let unsortedArray = [5,4,3,2,1];
  let bubbleSortObj = new bubbleSort(unsortedArray);
  let sortedArray = [1,2,3,4,5];

  beforeEach(function () {
    spyOn(bubbleSortObj, 'swap').and.callThrough();
    spyOn(bubbleSortObj, 'compare').and.callThrough();
  });

  it('sorts an array', function(){
    bubbleSortObj.bubbleSort();
    expect(bubbleSortObj.bubbleSort()).toEqual(sortedArray);
  });
  
  it ('calls swap function the correct number of times', function() {
    bubbleSortObj.bubbleSort();
    expect(bubbleSortObj.swap.calls.count()).toEqual(10);
  })

  it ('calls the compare function the correct number of times', function() {
    bubbleSortObj.bubbleSort();
    expect(bubbleSortObj.compare.calls.count()).toEqual(10);
  })

});


describe('Bubble Sort', function(){
  let unsortedArray = [8,4,6,20,5];
  let bubbleSortObj = new bubbleSort(unsortedArray);
  let sortedArray = [4,5,6,8,20];

  it('sorts a randomly assorted array', function(){
    expect(bubbleSortObj.bubbleSort()).toEqual(sortedArray);
  })
});

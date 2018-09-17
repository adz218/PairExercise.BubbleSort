describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});


describe('Bubble Sort', function(){
  let unsortedArray = [5,4,3,2,1];
  let bubbleSortObj = new bubbleSort(unsortedArray);
  let sortedArray = [1,2,3,4,5];

  it('sorts an array', function(){
    expect(bubbleSortObj.bubbleSort()).toEqual(sortedArray);
  });

  it ('calls swap function the correct number of times', function() {

    spyOn(bubbleSortObj, 'swap').and.callThrough();

    bubbleSortObj.bubbleSort();
    expect(bubbleSortObj.swap.calls.count()).toEqual(10);
  })

  it ('calls the compare function the correct number of times', function() {

    spyOn(bubbleSortObj, 'compare').and.callThrough();

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

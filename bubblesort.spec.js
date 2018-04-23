describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough(true);
  });
  it("helper function 'swap' runs 5 times", function () {
    bubbleSort([4,3,1,2,5]);
    expect(window.swap.calls.count()).toEqual(5);
  })
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });
  it('final array should be [1,2,3,4,5]', function() {
    expect(bubbleSort([4,3,1,2,5])).toEqual([1,2,3,4,5]);
  })

});

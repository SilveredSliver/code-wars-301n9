function double(array) {
    let result = array.map(num => num * 2);
    return result;
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
}
//solution code

var test1 = [1, 2, 3, 4, 5];
var test2 = [71, -548, 12.3, 31415];

Test.assertSimilar(double(test1), [2, 4, 6, 8, 10]);
Test.assertSimilar(double(test2), [142, -1096, 24.6, 62830]);
//test samples  
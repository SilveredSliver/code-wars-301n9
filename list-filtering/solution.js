function filter_list(l) {
    let result = l.filter(num => num === parseInt(num));
    return result;
      // Return a new array with the strings filtered out
    }
    //solution code

    Test.assertSimilar(filter_list([1,2,'a','b']),[1,2])
    Test.assertSimilar(filter_list([1,'a','b',0,15]),[1,0,15])
    Test.assertSimilar(filter_list([1,2,'aasf','1','123',123]),[1,2,123])
    //sample tests
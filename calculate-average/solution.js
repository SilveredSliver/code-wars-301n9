function find_average(array) {
    let arrAvg = arr => array.reduce((acc, cur) => acc + cur, 0) / array.length;
    return array.reduce(arrAvg);
  };
  //solution code

  Test.assertEquals(find_average([1,1,1]), 1);
  Test.assertEquals(find_average([1,2,3]), 2);
  //sample tests
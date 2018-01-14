const sequenceSum = (begin, end, step) => {
    if (begin > end) {
      return 0;
    } else {
    let sum = 0
    for( begin; begin <= end; begin += step) {
      sum += begin;
    }
    return sum;
    }
  };
  //solution code

  Test.assertSimilar(sequenceSum(2, 6, 2), 12)
  Test.assertSimilar(sequenceSum(1, 5, 1), 15)
  Test.assertSimilar(sequenceSum(1, 5, 3), 5)
  //test samples
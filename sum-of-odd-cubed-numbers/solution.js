function cubeOdd(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i]) !== true) { return undefined }
      let x = Math.pow(arr[i], 3);
      if (x % 2) {
        sum += x;
      }
    }
    return sum;
    }
//solution code

Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
Test.assertEquals(cubeOdd([-3,-2,2,3]), 0);
Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);
//sample tests

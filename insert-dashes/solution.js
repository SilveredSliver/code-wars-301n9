function insertDash(num) {
    //code me
    let stringConvert = num.toString();
    let vector = stringConvert.split("");//Turns each element into a string
   // console.log(vector);//Here they are separate strings
    let separateNumbers = (vector.map(Number));//Here they are separate numbers
    function evenNumber(n) {
      n = Number(n);
      return n === 0 || !!(n && ! (n%2));
    }
    function oddNumber(n) {
      return evenNumber(Number(n) + 1);
    }
    let newArray = separateNumbers.map(oddNumber);
    let outPutString = "";
    for (i = 0; i < newArray.length; i++) {
      outPutString += separateNumbers[i];
      if (i < newArray.length && newArray[i + 1] && newArray[i]) {
      outPutString += "-";
      }
    }
    return outPutString;
 };
 //my solution





 Test.assertEquals(insertDash(454793),'4547-9-3');
 Test.assertEquals(insertDash(123456),'123456');
 Test.assertEquals(insertDash(1003567),'1003-567');
 //sample tests
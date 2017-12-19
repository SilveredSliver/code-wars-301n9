//personal code
function isNice(arr){
    let count = 0;
    arr.forEach( function(ArrayVal, index) {
      for (n = 0; n < arr.length; n++) {
        if (index !== n && (arr[n] === ArrayVal+1 || arr[n] === ArrayVal-1)) {
          count++;
          break;
        }
      }
    });
    if (count !== arr.length || arr.length === 0) {
      return false;
    } else {
      return true;
    }
  }


//sample tests
describe("Nice Array", _=>{
    it("sample tests", _=>{
  Test.assertDeepEquals(isNice([2,10,9,3]),true);
  Test.assertDeepEquals(isNice([3,4,5,7]),false);
    });
  });
//personal code
function capitalize(s){
    let oddCap = s.split('').map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()).join('');
    let evenCap = s.split('').map((v, i) => i % 2 === 1 ? v.toUpperCase() : v.toLowerCase()).join('');
      return [oddCap, evenCap];
    };


//sample tests
describe("Basic tests", function(){
    Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
    Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
    Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
    });
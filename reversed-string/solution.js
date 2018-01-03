function solution(str){
    //var beenReversed = solution.reverse(str);
    var splitString = str.split('');
    var reverseArrayString = splitString.reverse();
    var rejoinArrayString = reverseArrayString.join('');
    return rejoinArrayString;
  }

//solution code



Test.expect(solution('world') == 'dlrow')// returns 'dlrow'
//sample test
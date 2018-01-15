function mutateMyStrings(stringOne, stringTwo){
    let output = stringOne;
    let arr1 = output.split("");
    let arr2 = stringTwo.split("");
    let lastX = stringOne;
    for (i = 0; i < arr1.length; i++) {
      let x = arr2.slice(0 , i+1).concat(arr1.slice(i+1 , arr1.length)).join("");
      if (x !== lastX) {
        output = output.concat('\n', x);
      }
      lastX = x;
    }
    output = output.concat('\n');
    return output;
  };
  //solution code


  Test.assertEquals( mutateMyStrings('bubble gum', 'turtle ham') , 'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n');
//sample tests  
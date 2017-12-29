function formatWords(words){
    if (!words) {
      return "";
    };
    words = words.filter(item => item.length !== 0);
    console.log(words.length)
    let stringOutput = '';
    switch(words.length) {
      case 0:
        stringOutput = '';
        break;
      case 1:
        stringOutput = words[0];
        break;
      case 2:
        stringOutput = words[0].concat(' and ', words[1]);
        break;
      default:
        let lastWord = words[words.length - 1];
        stringOutput = words.slice(0, -1).join(', ');
        stringOutput = stringOutput.concat(' and ', lastWord);
        break;
    };
    console.log(stringOutput);
    return (stringOutput);
  };
  //solution code


  formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
  formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
  formatWords([]) // should return ""
  //sample tests
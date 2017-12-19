//personal code
function fixTheMeerkat(arr) {
  return(arr.reverse());
};


//sample tests
Test.describe("Basic tests",_=>{
    Test.assertSimilar(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
    Test.assertSimilar(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
    Test.assertSimilar(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
    Test.assertSimilar(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
    Test.assertSimilar(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
    })
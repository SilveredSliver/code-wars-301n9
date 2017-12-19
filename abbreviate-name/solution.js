//personal code
function abbrevName(name) {
    newReturn = name.split("");
    firstInitial = newReturn[0].charAt(0);
    secondInitial = newReturn[1].charAt(0);
    return(firstInitial.concat(".", secondInitial));
};

//sample tests
Test.assertEquals(abbrevName("Sam Harris"), "S.H");
Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
Test.assertEquals(abbrevName("Evan Cole"), "E.C");
Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
Test.assertEquals(abbrevName("David Mendieta"), "D.M");
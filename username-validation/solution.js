function validateUsr(username) {
    res =  new RegExp ('^[0-9a-z\_]{4,16}$');
    return(res.test(username));
  };
  //is my solution






Test.describe("Basic tests",_=>{
    Test.assertEquals(validateUsr('asddsa'), true);
    Test.assertEquals(validateUsr('a'), false);
    Test.assertEquals(validateUsr('Hass'), false);
    Test.assertEquals(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
    Test.assertEquals(validateUsr(''), false);
    Test.assertEquals(validateUsr('____'), true);
    Test.assertEquals(validateUsr('012'), false);
    Test.assertEquals(validateUsr('p1pp1'),true);
    Test.assertEquals(validateUsr('asd43 34'), false);
    Test.assertEquals(validateUsr('asd43_34'), true);
    })
    //are the sample tests
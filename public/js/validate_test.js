
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    var re = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    return re.test(phone);
}

function validateNotEmpty(text) {
    var trimed = text.trim();
    return (trimed.length == 0? false: true);
}

function validateDropDownChecked(dropDownList) {

    var i;
    for (i = 0; i < dropDownList.length; i++) {
        var id = dropDownList[i];
        var dropDownClicked = document.getElementById(id + "_isClicked");
        if (dropDownClicked.value !== "true") {
            window.location.hash = '';
            window.location.hash = '#' + id;
            window.scrollBy(0, -30);

            var child = document.querySelector('#' + id + ' .dropbtn');
            child.style.color = "red";
            return false;
        }
    }

    return true;
}

/*
function validateEmailTest() {
    var testcase = 
    [
        "abc@gmail.com",
        "1234@gmail.com",
        "가@gmail.com",
        "1234@abc",
        "@abc.com",
        "@."
    ];
    var expected = 
    [
        true,
        true,
        true,
        false,
        false,
        false
    ];
    // https://github.com/somul-project/somul-apply-library/blob/development/tests/unit/test_validators.py
    
    var ret = [];
    
    testcase.forEach(element => {
        ret.push(validateEmail(element));
    });
    console.log(ret);
    
    (expected.length==ret.length && expected.every((v,i)=> v === ret[i])?
    console.log("validate success"): console.log("validate fail"));
}

validateEmailTest();
*/

/*
function validateEmailTest() {
    var testcase = 
    [
        "01012345678",
        "0101234567",
        "010123456",
        "0212345678",
        "021234567",
        "02123456",
        "03112345678",
        "0311234567",
        "031123456",
        
        "010-1234-5678",
        "010-12345678",
        "0101234-5678",
        "010-123-4567",
        "010-123-456",
        "02-1234-5678",
        "02-123-4567",
        "02-123-456",
        
        "031-1234-5678",
        "031-123-4567",
        "031-123-456",
        
        "010.1234.5678",
        "010 1234 5678"
    ];
    var expected = 
    [
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        
        true,
        true,
        false,
        
        false,
        false
    ];
    // https://github.com/somul-project/somul-apply-library/blob/development/tests/unit/test_validators.py
    
    var ret = [];
    
    testcase.forEach(element => {
        ret.push(validatePhone(element));
    });
    console.log(ret);
    
    (expected.length==ret.length && expected.every((v,i)=> v === ret[i])?
    console.log("validate success"): console.log("validate fail"));

    var i;
    for (i = 0; i < expected.length; i++) {
        if (expected[i] != ret[i]) {
            console.log(i + " : " + ret[i] + expected[i]);
        }
    }
}

validateEmailTest();
*/

//console.log(validateNotEmpty(" "));


function createWrapper(list) {
    var iDiv = document.createElement('div');
    iDiv.className = 'wrapper';
    
    list.forEach(f => {
        iDiv.innerHTML += f;
    });
    
    document.getElementById("paper").appendChild(iDiv);
}

function createTitleText(text) {
    return "<h1>" + text + "</h1>";
}

function createSubTitleText(text) {
    return "<h2>" + text + "</h2>";
}

function createHr() {
    return "<hr>";
}

function createPlaneText(text) {
    var rPlainText = text;
    return "<h3>" + rPlainText + "</h3>";
}

function createRadio(list) {
    var rRadio = "";
    console.log(list);
    var i = 0;
    list.forEach(element => {
        rRadio += 
        '<label class="font-gray big" for="contactChoice' + (i++) + '">'+
            '<input type="radio" id="contactChoice' + (i) + '" name="contact" value="' + element +'">' + element + ''+
        '</label>'
    });
    return rRadio;
}

function createCheckBox(text) {
    var rCheckBox = "";
    rCheckBox = '<br><label class="small"><input type="checkbox" id="check">' + text + '</label>';
    return rCheckBox;
}

function createButton(type, text, f) {
    // type (yellow, blue)
    var rButton = "";
    rButton = '<input type="button" class="background-' + type + '" value="' + text + '"  onclick="' + f + '">';
    return rButton;
}

// text, password, email
function createInput(type, planeHolder) {
    var rInput = "";
    rInput = '<br><input type="' + type + '" id="text" name="utext" placeholder="' + planeHolder + '"><br/><br>';
    return rInput;
}

function createDropDown() {
    
}

function createPtag(text) {
    var rPtag = "";
    rPtag = "<p>" + text + "</p>";
    return rPtag;
}
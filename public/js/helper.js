
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

var index = 0;
function createDropDown(defaultText, dropList) {
    index++;
    var rDropDown = "";
    rDropDown += '<div class="dropdown">';
    rDropDown +=    '<div id="d' + index + '" class="drop-btn-wrapper close" onclick="clickDropBtn(\'d' + index + '\', \'droplist' + index + '\')">';
    rDropDown +=        '<div class="dropbtn">Dropdown</div>';
    rDropDown +=        '<div class="dropbtn-image">close</div>';
    rDropDown +=    '</div>'
    rDropDown +=    '<div id="droplist' + index + '" class="dropdown-content">';

    dropList.forEach(element => {
        rDropDown +=    '<a onclick="setDropBtnName(\'d' + index + '\', \'' + element + '\')">' + element + '</a>';
    });
    rDropDown +=     '</div>'
    rDropDown += '</div>'

    return rDropDown;
}

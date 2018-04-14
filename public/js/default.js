/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function clickDropBtn(id, dropList) {
    
    var dropbtn = document.getElementById(dropList).classList;
    
    dropbtn.toggle("show");
    
    var child_image = document.querySelector('#' + id + ' .dropbtn-image');
    if (dropbtn.contains('show')) {
        closeDropBtnAll();
        dropbtn.toggle("show");
        child_image.innerHTML = 'open';
    } else {
        child_image.innerHTML = 'close';
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-btn-wrapper')) closeDropBtnAll();
}

function closeDropBtnAll() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    var children = document.querySelectorAll('.dropbtn-image');
    children.forEach(element => {
        element.innerHTML = 'close';
    });
}

function setDropBtnName(id, name) {
    var child = document.querySelector('#' + id + ' .dropbtn');
    child.innerHTML = name;
    child.style.color = "black";
    
    var dropDownClicked = document.getElementById(id + "_isClicked");
    dropDownClicked.value = "true";
}

var dropBtnIgnore = document.querySelectorAll('.dropbtn');
var dropBtnImageIgnore = document.querySelectorAll('.dropbtn-image');

function ignoreOnClick(selectorAll) {
    var k = [1,2,3,4,6];
    selectorAll.forEach(element => {
        element.addEventListener('click',function (e){
            e.stopPropagation();
        });
    });
}

ignoreOnClick(dropBtnIgnore);
ignoreOnClick(dropBtnImageIgnore);

// Validate

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

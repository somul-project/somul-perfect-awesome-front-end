
$(document).ready(function () {
    $(".paper").show();
    $(".spinner-preloader").hide();
});


$("#submit").click(function (event) {
    event.preventDefault();
    if(!validateNotEmpty()) return false;
    if(!validateEmail()) return false;
    
        
    var dict = {
        'email': $('#email').val(),
        'password': $('#password').val(),
    };
    
    $.ajax({
        type: "POST",
        url: "/api/v1/signin",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(dict),
        error: function(err) {
            console.log(err);
        },
        beforeSend: function() {
            $(".paper").hide();
            $(".spinner-preloader").show();
        },
        success: function(data) {
            
        },
        complete : function() {
            $(".spinner-preloader").fadeOut("slow", function () {
                $(".paper").fadeIn("slow");
            });   
        },
        dataType: "json"
    });
});

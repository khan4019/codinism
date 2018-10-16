
function check_Email(mail) {
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if (regex.test(mail.email.value)) {
        return true;
        alert("Congrats! Your email has been send send...");
        $('.hover-tooltip').tooltip('disable')
    }else {
        $('[data-toggle="tooltip"], .tooltip').tooltip("show");
        return false;
    }

  }
  $(document).ready(function() {
    $(".hover-tooltip").tooltip({
        disabled: false
    });
    $(".hover-tooltip").click(function() {
        $('.hover-tooltip').tooltip('disable')
        $('.hover-tooltip').tooltip('hide')
    })
    $("#submit").click(function() {
        $(".hover-tooltip").tooltip("enable");
    })
  
  });

function check_Email(mail) {
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if (regex.test(mail.email.value)) {
        $('#Mymodal').modal('show');
        $('.hover-tooltip').tooltip('disable')
      return true;
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
  
  $(document).ready(function() {
        $("#Mymodal").modal({show: false,backdrop: 'static'});
      $(".close").click(function() {
      $("#form")[0].reset();
    })
      $("#exit").click(function() {
      $("#form")[0].reset();
    })
  });
 
  $('#form').on('submit', function(event) {
 event.preventDefault(); //stops form on submit
  var formData = {};
  $.each($("#form").serializeArray(), function (i, field) {
    formData[field.name] = field.value;
  });
  $.ajax({
  url: 'inc/sendemail.php',
  data: formData,
  method:'POST',
  success: function(response) { 
   $(".hover-tooltip").tooltip("enable");
   }
});    

});
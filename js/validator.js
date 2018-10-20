
function check_Email(mail) {
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if (regex.test(mail.email.value)) {
        return true;
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
      $("#submit")[0].reset();
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
   $(this).hide(); 
   $('#Mymodal').modal('show');
   document.getElementById('form').reset();
   }
});    

});
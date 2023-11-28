    document.addEventListener('DOMContentLoaded', function() {
      var form = document.querySelector('.col-2 form');
       
      form.addEventListener('submit', function(event) {
         event.preventDefault(); 

            
       var emailInput = form.querySelector('input[type="text"]');
        var email = emailInput.value;
        
        alert('Thank you for subscribing with email: ' + email);
          emailInput.value = '';
        });
    });

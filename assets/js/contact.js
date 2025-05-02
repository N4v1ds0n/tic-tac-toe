// Initialize EmailJS
(function() {
    emailjs.init("vjl9hzvC35RMAst7n");
  })();


// Add event listener to the form submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        emailjs.sendForm('service_9f3ufvb', 'template_7ibcgki', this)
            .then(function() {
                showCustomAlert('Message sent strategyfully!');
            }, function(error) {
                showCustomAlert('FAILED... ' + JSON.stringify(error));
        });

    this.reset();
    });

    function showCustomAlert(message, callback) {
        const alertBox = document.getElementById('send-alert');
        const alertMessage = document.getElementById('alert-message');
        const alertOk = document.getElementById('alert-ok');
    
        alertMessage.innerText = message;
        alertBox.classList.remove('hidden');
    
        alertOk.onclick = function () {
            alertBox.classList.add('hidden');
            if (callback) callback();
        };
    }
});
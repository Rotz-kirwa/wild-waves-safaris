// This script enables WhatsApp integration for the contact form with validation
$(document).ready(function() {
    $('#form_submit_button').on('click', function(e) {
        // Collect form values
        var name = $('#contact_form_name').val().trim();
        var email = $('#contact_form_email').val().trim();
        var subject = $('#contact_form_subject').val().trim();
        var message = $('#contact_form_message').val().trim();

        // Validate fields
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields before sending your message to WhatsApp.');
            return;
        }


        // Compose WhatsApp message (use newlines, encode only once)
        var whatsappMessage =
            'Name: ' + name + '\n' +
            'Email: ' + email + '\n' +
            'Subject: ' + subject + '\n' +
            'Message: ' + message;

        // WhatsApp number (international format, no +)
        var whatsappNumber = '254713241666';
        var whatsappURL = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(whatsappMessage);

        // Open WhatsApp with the message
        window.open(whatsappURL, '_blank');
    });
});

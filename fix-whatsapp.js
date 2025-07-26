// Quick fix for remaining WhatsApp URLs
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.whatsapp-btn');
    buttons.forEach(button => {
        const onclick = button.getAttribute('onclick');
        if (onclick && onclick.includes('text=Hi! I need')) {
            const newOnclick = onclick.replace(/text=Hi! I need more information about ([^']+)'/g, 
                (match, text) => `text=${encodeURIComponent('Hi! I need more information about ' + text.replace(/\. Please.*/, '. Please provide details about accommodation, charges, availability and booking process.'))}'`);
            button.setAttribute('onclick', newOnclick);
        }
    });
});
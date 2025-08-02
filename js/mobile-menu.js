document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openMobileMenu');
    const closeBtn = document.getElementById('closeMobileMenu');
    const menu = document.getElementById('mobileMenu');
    
    if (openBtn && menu) {
        openBtn.addEventListener('click', function() {
            menu.style.right = '0';
        });
    }
    
    if (closeBtn && menu) {
        closeBtn.addEventListener('click', function() {
            menu.style.right = '-300px';
        });
    }
    
    // Close on nav link click
    const navLinks = menu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.style.right = '-300px';
        });
    });
});
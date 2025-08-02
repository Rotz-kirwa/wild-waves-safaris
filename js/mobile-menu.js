document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openMobileMenu');
    const closeBtn = document.getElementById('closeMobileMenu');
    const menu = document.getElementById('mobileMenu');
    
    if (openBtn && menu) {
        openBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            menu.classList.add('open');
        });
    }
    
    if (closeBtn && menu) {
        closeBtn.addEventListener('click', function() {
            menu.classList.remove('open');
        });
    }
    
    // Close on outside click
    document.addEventListener('click', function(e) {
        if (menu && !menu.contains(e.target) && !openBtn.contains(e.target)) {
            menu.classList.remove('open');
        }
    });
    
    // Close on nav link click
    const navLinks = menu.querySelectorAll('.mobile-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('open');
        });
    });
});
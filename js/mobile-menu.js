document.addEventListener('DOMContentLoaded', function() {
    try {
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
        
        // Close on nav link click - with proper error handling
        if (menu) {
            const navLinks = menu.querySelectorAll('a');
            if (navLinks.length > 0) {
                // Use event delegation for better performance
                menu.addEventListener('click', function(e) {
                    if (e.target.tagName === 'A') {
                        menu.style.right = '-300px';
                    }
                });
            }
        }
    } catch (error) {
        console.error('Mobile menu initialization error:', error);
    }
});
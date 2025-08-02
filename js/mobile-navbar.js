// Mobile Navbar Toggle Script
function toggleMobileMenu() {
    const overlay = document.getElementById('mobileMenuOverlay');
    if (!overlay) return;
    if (overlay.style.transform === 'translateX(0%)') {
        overlay.style.transform = 'translateX(-100%)';
        document.body.style.overflow = '';
    } else {
        overlay.style.transform = 'translateX(0%)';
        document.body.style.overflow = 'hidden';
    }
}

// Close menu on link click (for accessibility)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.mobile-nav-menu a').forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });
    document.querySelectorAll('.mobile-menu-close').forEach(btn => {
        btn.addEventListener('click', toggleMobileMenu);
    });
});

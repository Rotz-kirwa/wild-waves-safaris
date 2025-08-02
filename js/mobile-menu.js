// Simple Mobile Menu Toggle
function toggleMobileMenu() {
    const overlay = document.getElementById('mobileMenuOverlay');
    if (!overlay) return;
    
    if (overlay.style.transform === 'translateX(0%)' || overlay.style.transform === 'translateX(0px)') {
        overlay.style.transform = 'translateX(-100%)';
        document.body.style.overflow = 'auto';
    } else {
        overlay.style.transform = 'translateX(0%)';
        document.body.style.overflow = 'hidden';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('mobileMenuOverlay');
    if (overlay) {
        overlay.style.transform = 'translateX(-100%)';
    }
});
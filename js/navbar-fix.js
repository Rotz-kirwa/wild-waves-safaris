// NAVBAR FIX - AGGRESSIVE SOLUTION
(function() {
    'use strict';
    
    function forceNavbarVisible() {
        // Force styles directly
        const header = document.querySelector('.header');
        const topBar = document.querySelector('.top_bar');
        const mainNavCol = document.querySelector('.main_nav_col');
        
        if (header) {
            header.style.cssText = 'position: fixed !important; top: 32px !important; left: 0 !important; width: 100% !important; z-index: 9999 !important; visibility: visible !important; opacity: 1 !important; display: block !important; transform: none !important; background: rgba(255, 255, 255, 0.95) !important; backdrop-filter: blur(10px) !important; box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;';
        }
        
        if (topBar) {
            topBar.style.cssText = 'position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; z-index: 10000 !important; visibility: visible !important; opacity: 1 !important; display: block !important; transform: none !important; height: 32px !important; background: #2c3e50 !important; color: white !important; padding: 4px 0 !important;';
        }
        
        if (mainNavCol) {
            mainNavCol.style.cssText = 'height: 73px !important; visibility: visible !important; opacity: 1 !important; display: flex !important; transform: none !important;';
        }
    }
    
    // Run immediately
    forceNavbarVisible();
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', forceNavbarVisible);
    }
    
    // Run on window load
    window.addEventListener('load', forceNavbarVisible);
    
    // Override any scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(forceNavbarVisible, 10);
    });
    
    // Monitor and fix every 100ms
    setInterval(forceNavbarVisible, 100);
    
    // Override jQuery if it tries to hide navbar
    if (window.jQuery) {
        const $ = window.jQuery;
        const originalHide = $.fn.hide;
        const originalFadeOut = $.fn.fadeOut;
        
        $.fn.hide = function() {
            if (this.hasClass('header') || this.hasClass('top_bar') || this.hasClass('main_nav')) {
                return this;
            }
            return originalHide.apply(this, arguments);
        };
        
        $.fn.fadeOut = function() {
            if (this.hasClass('header') || this.hasClass('top_bar') || this.hasClass('main_nav')) {
                return this;
            }
            return originalFadeOut.apply(this, arguments);
        };
    }
})();
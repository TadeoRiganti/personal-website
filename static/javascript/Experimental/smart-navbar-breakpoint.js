// Smart navigation collapse - only show hamburger when items wrap
class SmartNav {
  constructor() {
    this.nav = document.getElementById('nav');
    this.hamburger = document.getElementById('hamburger');
    this.menu = this.nav.querySelector('.primary-header__menu');
    this.isMobileMode = false;
    
    // Add class to indicate JS is active
    document.documentElement.classList.add('js-enabled');
    
    this.init();
  }
  
  init() {
    // Set up hamburger click handler
    this.hamburger.addEventListener('click', () => this.toggleMenu());
    
    // Check if menu wraps on load and resize
    this.checkMenuWrap();
    window.addEventListener('resize', () => this.checkMenuWrap());
  }
  
  checkMenuWrap() {
    // Temporarily ensure nav is visible for measurement
    const navWasHidden = this.nav.style.display === 'none';
    if (navWasHidden) {
      this.nav.style.display = 'block';
      this.nav.classList.remove('visible');
    }
    
    // Get all menu items
    const items = Array.from(this.menu.querySelectorAll('.primary-header__menu-item'));
    
    if (items.length === 0) return;
    
    // Check if any item is on a different row than the first
    const firstItemTop = items[0].getBoundingClientRect().top;
    const hasWrapped = items.some(item => {
      return Math.abs(item.getBoundingClientRect().top - firstItemTop) > 5; // 5px tolerance
    });
    
    if (hasWrapped) {
      // Switch to mobile mode
      this.enableMobileMode();
    } else {
      // Switch to desktop mode
      this.disableMobileMode();
    }
  }
  
  enableMobileMode() {
    if (this.isMobileMode) return;
    
    this.isMobileMode = true;
    this.hamburger.style.display = 'block';
    this.nav.style.display = 'none';
    this.nav.classList.remove('visible');
    this.hamburger.setAttribute('aria-expanded', 'false');
  }
  
  disableMobileMode() {
    if (!this.isMobileMode) return;
    
    this.isMobileMode = false;
    this.hamburger.style.display = 'none';
    this.nav.style.display = 'block';
    this.nav.classList.remove('visible');
  }
  
  toggleMenu() {
    if (!this.isMobileMode) return;
    
    const isExpanded = this.hamburger.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      this.nav.classList.remove('visible');
      this.hamburger.setAttribute('aria-expanded', 'false');
    } else {
      this.nav.classList.add('visible');
      this.hamburger.setAttribute('aria-expanded', 'true');
    }
  }
}

// Initialize - defer ensures DOM is ready
new SmartNav();
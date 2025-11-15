// Utility function for smooth scrolling
export const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // Adjust this value to account for fixed header height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

// Initialize smooth scrolling for anchor links
export const initSmoothScrolling = () => {
  // Handle anchor links
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href !== '#') {
        scrollTo(href.substring(1));
      }
    }
  });
};

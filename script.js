document.addEventListener('DOMContentLoaded', () => {
        
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
          if (mobileMenu.classList.contains('-translate-x-full')) {
              mobileMenu.classList.remove('-translate-x-full');
              mobileMenu.classList.add('translate-x-0');
          } else {
              mobileMenu.classList.remove('translate-x-0');
              mobileMenu.classList.add('-translate-x-full');
          }
      });

      // Close mobile menu when a link is clicked
      mobileMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
              mobileMenu.classList.remove('translate-x-0');
              mobileMenu.classList.add('-translate-x-full');
          });
      });
  }

  // FAQ Accordion Logic
  const faqToggles = document.querySelectorAll('.faq-toggle');

  faqToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
          const content = toggle.nextElementSibling; // Get the .faq-content div
          const svg = toggle.querySelector('svg');

          // Close any open FAQ item if it's not the current one
          faqToggles.forEach(otherToggle => {
              if (otherToggle !== toggle && otherToggle.classList.contains('active')) {
                  otherToggle.classList.remove('active');
                  otherToggle.querySelector('svg').classList.remove('rotate-180');
                  otherToggle.nextElementSibling.style.maxHeight = '0';
              }
          });

          // Toggle the current FAQ item
          if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
              // Open content
              content.style.maxHeight = content.scrollHeight + 'px'; // Set max-height to scrollHeight for smooth transition
              toggle.classList.add('active');
              svg.classList.add('rotate-180');
          } else {
              // Close content
              content.style.maxHeight = '0px';
              toggle.classList.remove('active');
              svg.classList.remove('rotate-180');
          }
      });
  });
  
  // The previous Hotspot Logic has been removed as per your request
});


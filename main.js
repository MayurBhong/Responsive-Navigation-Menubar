document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const pages = document.querySelectorAll('.page');
  const links = document.querySelectorAll('.nav-link');

  // Handle navigation
  function navigateToPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
      page.classList.remove('active');
    });

    // Remove active class from all links
    links.forEach(link => {
      link.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.querySelector(pageId);
    if (selectedPage) {
      selectedPage.classList.add('active');
    }

    // Add active class to current link
    const currentLink = document.querySelector(`a[href="${pageId}"]`);
    if (currentLink) {
      currentLink.classList.add('active');
    }

    // Close mobile menu
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  }

  // Handle link clicks
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.getAttribute('href');
      navigateToPage(pageId);

      // Update URL hash without scrolling
      history.pushState(null, '', pageId);
    });
  });

  // Handle mobile menu toggle
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Close menu when window is resized above mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const pageId = window.location.hash || '#home';
    navigateToPage(pageId);
  });

  // Navigate to initial page
  const initialPageId = window.location.hash || '#home';
  navigateToPage(initialPageId);
});
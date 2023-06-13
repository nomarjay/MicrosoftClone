

  // indent section
  const container = document.querySelector('.container');

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    if (!child.classList.contains('hero, hero2, hero3')) {
      child.classList.add('indent');
    }
  }


  // lazy load images
  document.addEventListener('DOMContentLoaded', function() {
    var lazyImages = document.querySelectorAll('.lazy-load');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute('data-src');
            lazyImage.classList.remove('lazy-load');
            observer.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        observer.observe(lazyImage);
      });
    } else {
      // Fallback for browsers that do not support Intersection Observer
      // You can load all images immediately if needed
      lazyImages.forEach(function(lazyImage) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.removeAttribute('data-src');
        lazyImage.classList.remove('lazy-load');
      });
    }
  });


  // hamburger menu
  $(document).ready(function() {
    $('.hamburger').click(function() {
      $('.menu').slideToggle();
    });
  });

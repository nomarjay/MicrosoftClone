// Get the container element
const container = document.querySelector('.container');

// Get all the children elements of the container
const children = container.children;

// Loop through the children elements
for (let i = 0; i < children.length; i++) {
  const child = children[i];

  // Check if the child does not have the class name "hero"
  if (!child.classList.contains('hero, hero2, hero3')) {
    // Apply the CSS class to indent the content
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


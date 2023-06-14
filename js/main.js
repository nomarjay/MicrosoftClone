

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


  window.addEventListener('resize', function() {
    var navFlexElements = document.getElementsByClassName('nav-flex');
    var screenWidth = window.innerWidth;
  
    if (screenWidth < 1200) {
      for (var i = 0; i < navFlexElements.length; i++) {
        var navFlexElement = navFlexElements[i];
        var navParent = navFlexElement.parentNode;
        var children = navFlexElement.childNodes;
  
        for (var j = children.length - 1; j >= 0; j--) {
          navParent.insertBefore(children[j], navFlexElement.nextSibling);
        }
  
        navParent.removeChild(navFlexElement);
      }
    } else {
      // If the screen size is 1200px or larger, no action is needed
    }
  });
  
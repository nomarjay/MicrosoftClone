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


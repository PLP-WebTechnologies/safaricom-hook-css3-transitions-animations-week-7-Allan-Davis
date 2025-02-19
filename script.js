// Toggle background color on button hover
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

// Modal functionality
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('myModal');

// Open modal function
openModalButton.addEventListener('click', function() {
  modal.classList.add('visible');
});

// Close modal function
closeModalButton.addEventListener('click', function() {
  modal.classList.remove('visible');
});

// Form validation
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Name validation
  if (name.length < 3) {
    alert('Name must be at least 3 characters long');
    event.preventDefault(); // Prevent form submission
  }

  // Email validation
  if (!email.includes('@')) {
    alert('Please enter a valid email');
    event.preventDefault();
  }

  // Password validation
  if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    alert('Password must be at least 8 characters, contain an uppercase letter, and a number');
    event.preventDefault();
  }
});

// Example function with parameters and return value (calculating area of rectangle)
function calculateArea(length, width) {
  return length * width;
}

console.log(calculateArea(5, 3)); // 15

// Add a click event listener to the Send button
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert('Thank you for your message!');
  });
  
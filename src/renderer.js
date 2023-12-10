const editor = document.getElementById('editor');

window.addEventListener('message', (event) => {
  if (event.data === 'ready') {
    // Initialize your IDE functionalities here
    console.log('IDE Ready!');
  }
});

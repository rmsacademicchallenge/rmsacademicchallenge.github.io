// This was written by gpt cause none of know anything good about JS. Unless u do. yh this is just for sidebar
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  // Change arrow direction
  toggleBtn.innerHTML = sidebar.classList.contains('collapsed') ? '&#x25B6;' : '&#x25C0;';
});

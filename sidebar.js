const sidebar=document.getElementById('sidebar');
const toggleBtn=document.getElementById('toggleBtn');
toggleBtn.addEventListener('click',()=>{sidebar.classList.toggle('collapsed');toggleBtn.innerHTML=sidebar.classList.contains('collapsed')?'&#x25B6;':'&#x25C0;';});

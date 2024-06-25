document.getElementById('icon').addEventListener('click', function() {
    const info = document.getElementById('contactBody');
    const icon = document.getElementById('icon');

    if (info.style.display === 'flex') {
        info.style.display = 'none';
        icon.classList.remove('fa-chevron-down')
        icon.classList.add('fa-chevron-right');
    } else {
        info.style.display = 'flex';
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down')
    }
});


document.getElementById('addKnowledge').addEventListener('click', function() {
    const info = document.getElementById('knowledgeModule');

    if (info.style.display === 'none') {
        info.style.display = 'flex';
    } 
    else {
        info.style.display = 'none';
    }
});


document.getElementById('exitModule').addEventListener('click', function() {
    const info = document.getElementById('knowledgeModule');
    
    if (info.style.display === 'flex') {
        info.style.display = 'none';
    } 
});
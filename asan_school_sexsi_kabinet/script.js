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

const body = document.querySelector('body');
// document.getElementById('addKnowledge').addEventListener('click', function() {

//     info.classList.add("visible")
//     document.body.style.overflow = hidden
// });


// document.getElementById('exitModule').addEventListener('click', function() {
  
//     info.classList.remove("visible")
// });


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#addKnowledge");
const closeButton = document.querySelector("#exitModule");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
  body.classList.add("overflow_hidden");

});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
  body.classList.remove("overflow_hidden");
});

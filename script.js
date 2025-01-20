const google = document.querySelector(".fcircle");
const modal = document.querySelector('.modal');
const main = document.querySelector('.main');

google.addEventListener('click', () =>{
    modal.style.display = 'block';
})
window.addEventListener('click', (e) =>{
    if (e.target == main) {
        modal.style.display = "none";
    }
})
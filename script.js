const google = document.querySelector(".fcircle");
const modal = document.querySelector('.modal');
const main = document.querySelector('.main');
const circleblack = document.querySelector(".fcircle-2");

google.addEventListener('click', () =>{
    modal.style.display = 'block';
})
circleblack.addEventListener("click", () => {
    modal.style.display = "block";
});
window.addEventListener('click', (e) =>{
    if (e.target == main) {
        modal.style.display = "none";
    }
})

// script.js
const bgColorChangeButton = document.querySelector(".change-bg-color button");
const circleWhite = document.querySelector(".fcircle");
const circleBlack = document.querySelector(".fcircle-2");
const icon1 = document.querySelector(".icon-1");
const icon2 = document.querySelector(".icon-2");

bgColorChangeButton.addEventListener("click", () => {
  // تغییر تم صفحه
  document.body.classList.toggle("light-theme");

  // جایگزین کردن کلاس‌ها
  if (circleWhite.style.display === "none") {
    circleWhite.style.display = "block";
    circleBlack.style.display = "none";
  } else {
    circleWhite.style.display = "none";
    circleBlack.style.display = "block";
  }

  if (icon1.style.display === "none") {
    icon1.style.display = "block";
    icon2.style.display = "none";
  } else {
    icon1.style.display = "none";
    icon2.style.display = "block";
  }
});

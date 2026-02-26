console.log("script.js đã chạy");
const music = document.getElementById("nhacnen");
const btn = document.getElementById("nutnhac");

// autoplay → đang bật
let isPlaying = true;

// trạng thái ban đầu
btn.classList.add("active");

btn.addEventListener("click", () => {

    if (isPlaying) {

        music.pause();
        btn.classList.remove("active");
        isPlaying = false;

    } else {

        music.play().catch(err => console.log(err));
        btn.classList.add("active");
        isPlaying = true;

    }

});
// Chuyển cảnh 

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".smooth-link").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const href = this.href;

      document.body.classList.add("slide-out");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  });
});
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});
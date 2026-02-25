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
// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const container = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");

btn.addEventListener("click", () => {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        container.pause();
    }
    else {
        btn.classList.remove("slide");
        container.play();
    }
});
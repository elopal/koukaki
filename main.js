document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".banner");

    const video = document.createElement("video");
    const videoURL = "https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DWP+IW_P9+Studio+d'animation/Studio+Koukaki-vide%CC%81o+header+sans+son+(1).mp4";
    video.classList.add("background-video");
    video.src = videoURL;

    banner.appendChild(video);

    video.autoplay = true;
    video.loop = true;
    video.muted = true;
     
});

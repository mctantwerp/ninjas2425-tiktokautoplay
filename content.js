let videoElements = null;
let video = null;
let index = 0;


document.addEventListener('DOMContentLoaded', function () {
    videoElements = document.querySelectorAll('video');;
    video = videoElements[index];
    console.log('Video elements found');
    if (videoElements.length > 0) {
        video = videoElements[index];
    } else {
        console.log('No video elements found');
    }
});


document.addEventListener('visibilitychange', function () {
    videoElements = document.querySelectorAll('video');
    video = videoElements[index];
    console.log('Video elements found');
    console.log(videoElements);
    console.log(video);
    console.log(index);
    video.play();
});
document.addEventListener('touchend', function () {
    videoElements = document.querySelectorAll('video');
    console.log(index);
    if (index < 2) {
        index = Math.min(index + 1, videoElements.length - 1);
    }
    console.log(index);
    video = videoElements[index];
    console.log('Video elements found');
    console.log(videoElements);
    console.log("Scrolling");
    console.log(video);
    console.log(index);
});
document.addEventListener('scroll', function () {
    videoElements = document.querySelectorAll('video');
    console.log(index);
    if (index < 2) {
        index = Math.min(index + 1, videoElements.length - 1);
    }
    console.log(index);
    video = videoElements[index];
    console.log('Video elements found');
    console.log(videoElements);
    console.log("Scrolling");
    console.log(video);
    console.log(index);
});
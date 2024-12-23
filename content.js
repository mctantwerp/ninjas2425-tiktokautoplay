console.log("Hello from content.js");
let video = document.querySelector('video');
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        // Find the video element
        video = document.querySelector('video');
        console.log('VIDEO LOG');
        console.log(video);
        if (video && video.paused) {
            // Resume the video playback
            video.play();
        }
    }
});
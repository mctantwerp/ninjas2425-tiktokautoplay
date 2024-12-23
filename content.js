let video;
let index = 0;
let scrollContainer = document.querySelector('.css-1xzh9re-DivColumnListContainer.e108hwin0');
console.log('hi from content.js');

document.addEventListener('visibilitychange', async function () {
    video = document.querySelectorAll('video')[index];
    await delay(50);
    if (video.paused) {
        video.play();
    }

});

scrollContainer.addEventListener('scroll', async function () {
    if (video && !video.paused) {
        video.pause();
    }

    if (index < 1) {
        index++;
    }
    await delay(1000);
    video = document.querySelectorAll('video')[index];
    console.log(index);

    if (video.paused) {
        video.play();
    }
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


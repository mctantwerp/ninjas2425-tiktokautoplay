let video;
let index = 0;
let scrollContainer = document.querySelector('.css-ldiizi-DivColumnListContainer.e108hwin0');
let debounceTimer;
let extensionEnabled;
chrome.storage.sync.get(['autoplayEnabled'], (result) => {
    extensionEnabled = result.autoplayEnabled || false;
});

document.addEventListener('visibilitychange', async function () {
    if (extensionEnabled) {
        video = document.querySelectorAll('video')[index];
        await delay(50);
        if (video.paused) {
            video.play();
        }
    }
});

// scrollContainer.addEventListener('scroll', function () {
//     if (extensionEnabled) {
//         // Debounce the scroll event
//         clearTimeout(debounceTimer);
//         debounceTimer = setTimeout(async () => {
//             if (video && !video.paused) {
//                 video.pause();
//             }
//             index++;
//             video = document.querySelectorAll('video')[index];
//             if (video && video.paused) {
//                 video.play();
//             }
//         }, 100); // Adjust the delay (200ms) as needed
//     } else {
//         if (index < 1) {
//             index++;
//         }
//     }
// });

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Listen for changes to chrome.storage
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'sync' && changes.autoplayEnabled) {
        console.log("Autoplay Enabled changed:", changes.autoplayEnabled.newValue);

        // Perform actions based on the new value of autoplayEnabled
        if (changes.autoplayEnabled.newValue) {
            // Enable autoplay
            console.log("Autoplay is now enabled");
            extensionEnabled = true;
        } else {
            // Disable autoplay
            console.log("Autoplay is now disabled");
            extensionEnabled = false;
        }
    }
});



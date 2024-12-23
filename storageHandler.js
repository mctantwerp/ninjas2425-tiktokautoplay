document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('autoplayToggle');

    //get state
    chrome.storage.sync.get(['autoplayEnabled'], (result) => {
        checkbox.checked = result.autoplayEnabled || false;
        console.log(`Loaded state: ${checkbox.checked}`);
    });

    if (checkbox) {
        checkbox.addEventListener('change', (event) => {
            const isChecked = event.target.checked;

            //save state
            chrome.storage.sync.set({ autoplayEnabled: isChecked }, () => {
                console.log(`State saved: ${isChecked}`);
            });
        });
    } else {
        console.error("Checkbox element not found.");
    }
});

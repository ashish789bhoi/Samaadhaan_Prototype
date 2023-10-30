function updateDateTime() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById('currentDateTime').textContent = formattedDate;
}

// Call the function to update date and time immediately
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000);

// JavaScript to handle font size change
document.addEventListener("DOMContentLoaded", function () {
    // Set initial font size to 16px (adjust as needed)
    let currentFontSize = 16;

    // Function to update the font size
    function updateFontSize() {
        document.body.style.fontSize = currentFontSize + "px";
    }

    // Button click event handlers
    document.getElementById("decfont").addEventListener("click", function () {
        currentFontSize -= 2; // Decrease font size by 2px (adjust as needed)
        updateFontSize();
    });

    document.getElementById("incfont").addEventListener("click", function () {
        currentFontSize += 2; // Increase font size by 2px (adjust as needed)
        updateFontSize();
    });

    document.getElementById("resetFont").addEventListener("click", function () {
        currentFontSize = 16; // Reset font size to 16px (adjust as needed)
        updateFontSize();
    });
});

let vid = document.getElementById("myVideo");

function getPlaySpeed() { 
alert(vid.playbackRate);
} 

function setPlaySpeed() { 
vid.playbackRate = 0.5;
}

document.addEventListener("DOMContentLoaded", function () {
const searchIcon = document.getElementById("searchIcon");
const searchPopup = document.getElementById("searchPopup");
const closePopup = document.getElementById("closePopup");

// Show the search pop-up when the search icon is clicked
searchIcon.addEventListener("click", function () {
searchPopup.style.display = "block";
});

// Close the search pop-up when the close button is clicked
closePopup.addEventListener("click", function () {
searchPopup.style.display = "none";
});

// You can also close the pop-up when the user clicks outside of it (optional)
window.addEventListener("click", function (event) {
if (event.target === searchPopup) {
    searchPopup.style.display = "none";
}
});
});

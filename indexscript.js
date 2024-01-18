let currentlyOpenBox = null;

function toggleBox(boxNumber) {
    const box = document.getElementById(`box${boxNumber}`);

    if (box === currentlyOpenBox) {
        box.style.display = 'none';
        currentlyOpenBox = null;
    } else {
        if (currentlyOpenBox) {
            currentlyOpenBox.style.display = 'none';
        }

        box.style.display = 'block';
        currentlyOpenBox = box;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 5; i++) {
        const box = document.getElementById(`box${i}`);
        box.addEventListener('click', function () {
            box.style.display = 'none';
            currentlyOpenBox = null;
        });
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 700) {
        window.location.href = 'mobile.html';
    }
});  

if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = "mobile.html";
    }

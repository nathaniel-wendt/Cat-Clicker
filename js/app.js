const clicks = document.querySelector('.clicks');
let clickCount = 0;

function addClick() {
    clickCount++;
    clicks.textContent = clickCount;
}

document.addEventListener('click', function(event) {
    if (event.target.matches('img')) {
        addClick();
    }
})





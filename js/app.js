const clicks = document.querySelector('.clicks');

let clickCount = 0;

let kitty = document.getElementById('kitty');

function addClick() {
    clickCount++;
    clicks.textContent = clickCount;
}

kitty.addEventListener('click', function() {
    addClick();
})





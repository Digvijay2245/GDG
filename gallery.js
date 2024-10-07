document.querySelectorAll('.img').forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.getElementById('overlay');
        const overlayImg = document.getElementById('overlayImg');
        overlayImg.src = this.src;
        overlay.classList.add('active');
    });
});

document.getElementById('overlay').addEventListener('click', function() {
    this.classList.remove('active');
});
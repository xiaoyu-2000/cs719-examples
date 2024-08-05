document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');

    noButton.addEventListener('mouseenter', function() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = viewportWidth - buttonRect.width;
        const maxY = viewportHeight - buttonRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });



});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    showItem(currentIndex);
    setInterval(nextItem, 3000); // Change item every 3 seconds
});

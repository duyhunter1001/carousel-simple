let nextElm = document.getElementById('next');
let prevElm = document.getElementById('prev');
let carouselElm = document.querySelector('.carousel');
let listItemElm = document.querySelector('.carousel .list');
let thumbnailElm = document.querySelector('.carousel .thumbnail');

let timeRunning = 3000;
let runTimeout;

let timeAutoNext = 7000;
let runTimeoutAuto = setTimeout(() => {
    nextElm.click();
}, timeAutoNext);

nextElm.onclick = () => {
    showSlider('next');
}

prevElm.onclick = () => {
    showSlider('prev');
}

function showSlider(direction) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (direction === 'next') {
        listItemElm.appendChild(itemSlider[0]);
        thumbnailElm.appendChild(itemThumbnail[0]);
        carouselElm.classList.add('next');
    } else if (direction === 'prev') {
        listItemElm.prepend(itemSlider[itemSlider.length - 1]);
        thumbnailElm.prepend(itemThumbnail[itemThumbnail.length - 1]);
        carouselElm.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() => {
        carouselElm.classList.remove('next');
        carouselElm.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runTimeoutAuto);
    runTimeoutAuto = setTimeout(() => {
        nextElm.click();
    }, timeAutoNext);
}
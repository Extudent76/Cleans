const productContainers = [...document.querySelectorAll('.review-box-cards')];
const nxtBtn = [...document.querySelectorAll('.btn-Arrow-Slider-Right')];
const preBtn = [...document.querySelectorAll('.btn-Arrow-Slider-Left')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
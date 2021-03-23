//main modal
const itemModal = document.querySelector('.item-modal-container');
//all posts
const posts = document.querySelectorAll('.posts-container .post');
//slider previous and next button
const prevButton = document.querySelector('.item-modal-container .previous');
const nextButton = document.querySelector('.item-modal-container .next');
//close button
const closeButton = document.querySelector('.item-modal-container .close');

//adding pop up modal for each post in the marketplace
posts.forEach(post => {
    post.addEventListener('click', () => {
        itemModal.classList.add('modal-active');
    });
});

//close button for modal
closeButton.addEventListener('click', () => {
    itemModal.classList.remove('modal-active');
});


//button functions for controlling pictures
let sliderContainer = document.querySelector('.item-modal-container .slider-container');
let slider = document.querySelector('.item-modal-container .slider');
let images = document.querySelectorAll('.item-modal-container .slider-img');
let counter = 0;
let size = sliderContainer.offsetWidth;
window.addEventListener('resize', () => {
    size = sliderContainer.offsetWidth;
});
prevButton.addEventListener('click', () => {
    if (counter < 1) return;
    counter--;
    slider.style.transform = `translateX(${-size * counter}px)`;
    //slider.style.backgroundImage = `url('${images[counter].src}')`;
});
nextButton.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    slider.style.transform = `translateX(${-size * counter}px)`;
    //slider.style.backgroundImage = `url('${images[counter].src}')`;
});




const title = document.querySelector('.hero_title')
const blue_flower = document.querySelector('.blue_flower');
const green_up = document.querySelector('.green_up');
const green_bottom = document.querySelector('.green_bottom');
const yellow_up = document.querySelector('.yellow_up');
const yellow_bottom = document.querySelector('.yellow_bottom');
const yellow_dotted = document.querySelector('.yellow_dotted');
const white_balls = document.querySelector('.white_balls');
const white_dots = document.querySelector('.white_dots');
const red_dots = document.querySelector('.red_dots');
const red_blue_circle = document.querySelector('.red_blue_circle');
const red_quad = document.querySelector('.red_quad');
const WavyLines = document.querySelector('.WavyLines');

document.addEventListener('scroll', function(){
    let value = window.scrollY
    title.style.marginTop = value * 1.2 + 'px';
    blue_flower.style.marginLeft = value * 0.1 + 'px';
    blue_flower.style.marginBottom = value * 0.1 + 'px';
    yellow_dotted.style.marginBottom = value * -0.2 + 'px';
    yellow_dotted.style.marginLeft = value * -0.2 + 'px';
    yellow_bottom.style.marginRight = value * 0.2 + 'px';
    yellow_bottom.style.marginBottom = value * 0.15 + 'px';
    green_bottom.style.marginRight = value * 0.15 + 'px';
    green_bottom.style.marginBottom = value * 0.12 + 'px';
    yellow_up.style.marginLeft = value * 0.20 + 'px';
    yellow_up.style.marginTop = value * 0.9 + 'px';
    green_up.style.marginLeft = value * 0.13 + 'px';
    green_up.style.marginTop = value * 0.9 + 'px';
    white_balls.style.marginLeft = value * 0.2 + 'px';
    white_balls.style.marginTop = value * 0.8 + 'px';
    red_quad.style.marginTop = value * 0.5 + 'px';
    red_blue_circle.style.marginTop = value * 0.2 + 'px';
    red_blue_circle.style.marginRight = value * 0.2 + 'px';

})

const timelineSlider = document.querySelector('.timeline-slider');
const timelineTrack = document.querySelector('.timeline-track');
const arrowRight = document.getElementById('arrow-right');

let isMouseDown = false;
let startX;
let scrollLeft;

timelineSlider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - timelineSlider.offsetLeft;
    scrollLeft = timelineSlider.scrollLeft;
    timelineSlider.style.cursor = 'grabbing';
});

timelineSlider.addEventListener('mouseleave', () => {
    isMouseDown = false;
    timelineSlider.style.cursor = 'grab';
});

timelineSlider.addEventListener('mouseup', () => {
    isMouseDown = false;
    timelineSlider.style.cursor = 'grab';
});

timelineSlider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - timelineSlider.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast factor
    timelineSlider.scrollLeft = scrollLeft - walk;
});

// Click event to scroll the timeline right using the arrow
arrowRight.addEventListener('click', () => {
    timelineSlider.scrollBy({ left: 200, behavior: 'smooth' });
});

function changeVideo(videoUrl, title) {
    // Update the main video iframe source
    document.getElementById('currentVideo').src = videoUrl;
    
    // Update the video title
    document.querySelector('.heading').innerText = title;

    // Update the sub-heading based on the title
    const subHeading = document.querySelector('.heading');
    subHeading.innerText = title.toUpperCase(); // Change to uppercase or format as needed
}

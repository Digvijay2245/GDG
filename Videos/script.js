function changeVideo(videoUrl, title) {
    // Update the main video iframe source
    document.getElementById('currentVideo').src = videoUrl;
    
    // Update the video title
    document.querySelector('.heading').innerText = title;

    // Update the sub-heading based on the title
    const subHeading = document.querySelector('.heading');
    subHeading.innerText = title.toUpperCase(); // Change to uppercase or format as needed
}

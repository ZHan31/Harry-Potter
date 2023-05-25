var videoContainer = document.querySelector('.video-container');
var video = videoContainer.querySelector('video');

videoContainer.addEventListener('mouseover', function() {
    video.play();
});

videoContainer.addEventListener('mouseout', function() {
    video.pause();
});
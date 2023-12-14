var spaceMusic = document.getElementById('spaceMusic');
var volumeSlider = document.getElementById('volumeSlider');
var playPauseButton = document.getElementById('playPauseButton');

playPauseButton.addEventListener('click', function() {
    if (spaceMusic.paused) {
        spaceMusic.play();
        playPauseButton.textContent = 'Pause';
    } else {
        spaceMusic.pause();
        playPauseButton.textContent = 'Play';
    }
});

volumeSlider.addEventListener('input', function() {
    spaceMusic.volume = volumeSlider.value;
});
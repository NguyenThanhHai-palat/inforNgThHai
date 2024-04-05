const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const volumeRange = document.getElementById('volume');

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '&#10074;&#10074;'; // Change to pause icon when playing
    } else {
        audio.pause();
        playBtn.innerHTML = '&#9658;'; // Change to play icon when paused
    }
});

volumeRange.addEventListener('input', () => {
    audio.volume = volumeRange.value / 100;
});

const urlParams = new URLSearchParams(window.location.search);
const audioUrl = urlParams.get('audio');
if (audioUrl) {
    audio.src = audioUrl;
}

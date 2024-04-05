const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const volumeRange = document.getElementById('volume');
const loadBtn = document.getElementById('load-btn');
const audioUrlInput = document.getElementById('audio-url');

loadBtn.addEventListener('click', () => {
    const audioUrl = audioUrlInput.value;
    if (audioUrl.trim() !== '') {
        audio.src = audioUrl;
        audio.play();
        playBtn.innerHTML = '&#10074;&#10074;';
    }
});

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

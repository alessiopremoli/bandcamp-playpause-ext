
const _simpleLogger = log => console.log(`%c [BANDCAMP PLAY/PAUSE]: ${log} `, 'background: #31A0C3; color: #EEF2F3')
const isPlaying = el => el.classList.contains('playing');

_simpleLogger('extension by Alessio Premoli https://github.com/alessiopremoli')
_simpleLogger('loaded')
const playButton = document.querySelector('[aria-label="Play/pause"]').children[0];


document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault()
        playButton.click()

        _simpleLogger(!isPlaying(playButton) ? 'resumed' : 'stopped')
    }
});
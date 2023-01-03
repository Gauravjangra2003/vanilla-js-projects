function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // That stop all the audio's running together
    audio.currentTime = 0;  // Rewind to start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {   // Function for remove tranition - the yellow border
    if (e.propertyName !== 'transform') return;  // Skip it if it's not a transform
    e.target.classList.remove('playing');
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));   // Event of Transition End
window.addEventListener('keydown', playSound);
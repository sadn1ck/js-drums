window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    // this.console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    function removeTransition(e){
        if(e.propertyName!=='transform') return;
        key.classList.remove('playing')
    }
    const keys = this.document.querySelectorAll(`.key`)
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
});
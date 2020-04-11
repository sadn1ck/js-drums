const sounds = {
    "65": "sounds/clap.wav",
    "83": "sounds/hihat.wav",
    "68": "sounds/kick.wav",
    "70": "sounds/openhat.wav",
    "71": "sounds/boom.wav",
    "72": "sounds/ride.wav",
    "74": "sounds/snare.wav",
    "75": "sounds/tom.wav",
    "76": "sounds/tink.wav"
}

function playSounds(e) {
    let cc = e.keyCode.toString();
    const audio = sounds[cc] ? new Audio(sounds[cc]) : null;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    setTimeout(() => {
        key.classList.remove("playing");
        clearTimeout();
    }, 80);
}
function playSoundsOnClick(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    keyco = text.charCodeAt(0);
    // console.log(keyco);

    const audio = (keyco != 10) ? new Audio(sounds[keyco.toString()]) : null;
    // console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${keyco}"]`);
    key.classList.add("playing");
    setTimeout(() => {
        key.classList.remove("playing");
        clearTimeout();
    }, 80);

}

document.addEventListener("keydown", playSounds);
document.addEventListener("click", playSoundsOnClick);

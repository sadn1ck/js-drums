function playSounds(e){
    // console.log(e);
    const audio = document.querySelector(`audio[class="${e.keyCode}"]`);
     if (!audio) return;
     audio.currentTime = 0;
     audio.play();
     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
     console.log(typeof(keyCode));
     key.classList.add("playing");
 
}
function playSoundsOnClick(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
    text = target.textContent || target.innerText;
    keyco = text.charCodeAt(0);
    // console.log(keyco);
    
    const audio = document.querySelector(`audio[class="${keyco}"]`);
    // console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${keyco}"]`);
    key.classList.add("playing");
    
}
function removeTransition(e) {
    // console.log(e);
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

document.addEventListener("keydown", playSounds);
document.addEventListener("click", playSoundsOnClick);

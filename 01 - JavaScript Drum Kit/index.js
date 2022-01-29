
function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key='${e.keyCode}']`)
  const key = this.document.querySelector(`.key[data-key='${e.keyCode}']`)
  if (!audio) {//stop function from running
    return;
  }
  audio.currentTime = 0;//rewind to the start.  
  audio.play();
  key.classList.add('playing');
}
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;//skip anything that is not transform. 
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)










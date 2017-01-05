const doc = document
const win = window
const play = 'playing'
function playDrum (e) {
  const audio = doc.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = doc.querySelector(`div[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add(play)
}
function removeTransition (e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove(play)
}
const keys = doc.querySelectorAll('div')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
win.addEventListener('keydown', playDrum)

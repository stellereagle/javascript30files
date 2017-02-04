const dom = document
const player = dom.querySelector('.player')
const viewer = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progressFilled')
const playerButton = player.querySelector('.playerButton')
const skipButtons = player.querySelectorAll('[data-skip')
const ranges = player.querySelectorAll('.playerSlider')

function togglePlay () {
  const method = viewer.paused ? 'play' : 'pause'
  viewer[method]()
}
function updateButton () {
  const icon = viewer.paused ? '⏯' : '⏸'
  playerButton.textContent = icon
}

function skip () {
  viewer.currentTime += parseFloat(this.dataset.skip)
}

function handleProgress () {
  const percent = (viewer.currentTime / viewer.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function handleRangeUpdate () {
  viewer[this.name] = this.value
  console.log(this.name)
  console.log(this.value)
}

viewer.addEventListener('click', togglePlay)
viewer.addEventListener('play', updateButton)
viewer.addEventListener('pause', updateButton)

playerButton.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('click', handleRangeUpdate))

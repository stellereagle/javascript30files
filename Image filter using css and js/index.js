const doc = document
const win = window

const inputs = doc.querySelectorAll('.controls input')
function changeEvent () {
  const suffix = this.dataset.sizing || ''
  doc.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
inputs.forEach(input => input.addEventListener('change', changeEvent))
inputs.forEach(input => input.addEventListener('mousemove', changeEvent))

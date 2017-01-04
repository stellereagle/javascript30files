const dom = document
const secondHand = dom.querySelector('.secondHand')
const minHand = dom.querySelector('.minHand')
const hourHand = dom.querySelector('.hourHand')
const digitalClock = dom.querySelector('.digitalClock')
function setDate () {
  const now = new Date()
  const seconds = now.getSeconds()
  const mins = now.getMinutes()
  const hours = now.getHours()
  const secondsDegree = ((seconds / 60) * 360) + 90
  const minsDegree = ((mins / 60) * 360) + 90
  const hourDegree = ((hours / 60) * 360) + 90
  const digitalTime = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
  secondHand.style.transform = `rotate(${secondsDegree}deg)`
  minHand.style.transform = `rotate(${minsDegree}deg)`
  hourHand.style.transform = `rotate(${hourDegree}deg)`
  digitalClock.textContent = digitalTime
}
setInterval(setDate, 1000)

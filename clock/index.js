const doc = document
const secondHand = doc.querySelector('.secondHand')
const minHand = doc.querySelector('.minHand')
const hourHand = doc.querySelector('.hourHand')
const digitalClock = doc.querySelector('.digitalClock')
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

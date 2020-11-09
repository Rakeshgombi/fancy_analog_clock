var sec = document.querySelector('#second')
var min = document.querySelector('#minute')
var hr = document.querySelector('#hour')

function rotate() {
  const currentdate = new Date()

  const hour = currentdate.getHours()
  const minute = currentdate.getMinutes()
  const second = currentdate.getSeconds()

  const secondfraction = second / 60
  const minutefraction = (secondfraction + minute) / 60
  const hourfraction = (minutefraction + hour) / 12

  const secondrotate = secondfraction * 360
  const minuterotate = minutefraction * 360
  const hourrotate = hourfraction * 360

  sec.style.transform = `rotate(-${secondrotate}deg)`;
  min.style.transform = `rotate(-${minuterotate}deg)`;
  hr.style.transform = `rotate(-${hourrotate}deg)`;
}

setInterval(rotate, 10)

function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
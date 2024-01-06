let sec = document.querySelector('.sec');
let toggle = document.querySelector('.toggle');
toggle.onclick = function() {
  sec.classList.toggle('dark');
}


var percentage = document.querySelector('.percentage');
var percent = document.querySelector('.percent');
navigator.getBattery().then((battery) => {
  percentage.style.width = battery.level * 100 + '%';
  percent.innerHTML = battery.level * 100 + '%';
})


// var percentage = document.querySelector('.percentage');
// var percent = document.querySelector('.percent');
// navigator.getBattery().then(function(battery){
//   percentage.style.width = battery.level * 100 + '%';
//   percent.innerHTML = battery.level * 100 + '%';
// })
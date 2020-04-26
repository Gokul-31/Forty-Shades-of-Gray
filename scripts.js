let numArray = [];
let items;
var num;
let numCheck = 0;
let timeElapsed = 0;
// var timeBlock;
let min = 0;
var sec=0;
var msec=0;
var TimerInterval;

let timeBlockTime = document.getElementsByClassName('timeBlockTime');

items = document.getElementsByClassName('item');
// timeBlock = document.getElementById('timeBlock');

initiate();

for (let i = 0; i < 20; i++) {
  numArray[i] = i + 1;
}

var bigDiv = document.getElementById('grid');
for (let i = 0; i < 20; i++) {
  var insideDiv = document.createElement('div');
  var p = document.createElement('p');
  p.textContent = "" + numArray[i];
  insideDiv.appendChild(p);
  insideDiv.classList.add('item')
  bigDiv.appendChild(insideDiv);
}

for (let i = 0; i < 20; i++) {
  items[i].addEventListener("mouseover", function update_item() {
    num = parseInt(items[i].textContent);
    if (num == numCheck + 1) {
      if (num === 1) {
        timeElapsed = 0;
      }
      if (num <= 20) {
        num += 20;
        items[i].textContent = "" + num;
      }
      else if (num > 20 && num < 40) {
        items[i].textContent = "";
      }
      else if (num === 40) {
        items[i].textContent = "";
        clearInterval(TimerInterval);
      }
      numCheck++;
      //display the items properly

    }
  });
}

function initiate() {
  //initiate countdown timer
  TimerInterval = setInterval(Timer, 1);
}

function Timer() {
  timeElapsed++;
  sec = Math.floor(timeElapsed / 1000);
  if (sec >= 60) {
    min = Math.floor(sec / 60);
    sec %= 60;
  }
  msec = timeElapsed % 1000;
  
  timeBlockTime.textContent= min+"m : ";
  if(sec<10){
    timeBlockTime.textContent+="0";
  }
  timeBlockTime.textContent += sec + "s : ";
  if (msec < 10) {
    timeBlockTime.textContent += "00";
  }
  else if (msec < 100) {
    timeBlockTime.textContent += "0";
  }
  timeBlockTime.textContent += msec + "ms";


}

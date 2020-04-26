let numArray = [];
let items;
var num;
let numCheck = 0;
let timeElapsed=0;
// var timeBlock;
let min = 0;
var sec;
var msec;
var TimerInterval;

let timeBlockTime = document.getElementById('timeBlockTime');

items = document.getElementsByClassName('item');
// timeBlock = document.getElementById('timeBlock');

for (let i = 0; i < 20; i++) {
  numArray[i] = i + 1;
}

var bigDiv = document.getElementById('grid');
for (let i = 0; i < 20; i++) {
  var insideDiv = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = "" + numArray[i];
  insideDiv.appendChild(p);
  insideDiv.classList.add('item')
  bigDiv.appendChild(insideDiv);
}

for (let i = 0; i < 20; i++) {
  items[i].addEventListener("mouseover", function update_item() {
    num = parseInt(items[i].textContent);
    if (num == numCheck + 1) {
      if (num == 1) {
        timeElapsed =0;
        startTimer();
      }
      if (num <= 20) {
        num += 20;
        items[i].innerHTML = "" + num;
      }
      else if (num > 20 && num < 40) {
        items[i].innerHTML = "";
      }
      else if (num == 40) {
        items[i].innerHTML = "";
        clearInterval(Timer);
      }
      numCheck++;
      //display the items properly

    }
  });
}

function startTimer(){
  TimerInterval=setInterval(Timer(),1);
}

function Timer(){
  timeElapsed++;
  sec = Math.floor(timeElapsed / 1000);
  if (sec >= 60) {
    min = Math.floor(sec / 60);
    sec %= 60;
  }
  msec = timeElapsed % 1000;
  if (min != 0) {
    timeBlockTime.innerHTML = min + "m :";
    if (sec < 10) {
      timeBlockTime.innerHTML += "0";
    }
    else {
      timeBlockTime.innerHTML = "0m :";
      if (sec < 10) {
        timeBlockTime.innerHTML += "0";
      }
    }
    timeBlockTime.innerHTML += sec + "s :";
    if (msec < 10) {
      timeBlockTime.innerHTML += "00";
    }
    else if (msec < 100) {
      timeBlockTime.innerHTML += "0";
    }
    timeBlockTime.innerHTML += msec + "ms";
  }

  }
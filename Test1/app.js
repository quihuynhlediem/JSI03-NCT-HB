let min = [0, 0, 0, 0, 0]
let second = [0, 0, 0, 0, 0]
let switchStatus = [0, 0, 0, 0, 0];
let timer = [];

for (i = 1; i <= 5; i++) {
  timer.push(document.getElementById(String(i)));
}

function showtimeSet(t, timeshow){
  if (second[t] == 60) {
    second[t] = 0;
    secondShow = "0" + String(second[t]);
    min[t] = min[t] + 1;
  } else if (second[t] < 10) {
    secondShow = "0" + String(second[t]);
  } else {
    secondShow = String(second[t]);
  }

  if (min[t] < 10) {
    minShow = "0" + String(min[t]);
  } else {
    minShow = String(min[t]);
  }
  timeshow.innerHTML = minShow + ' : ' + secondShow;
}

function startFunction() {
  //console.log(this.event.target.previousElementSibling.firstElementChild);
  let thisTimer = this.event.target.previousElementSibling.firstElementChild;
  //timeshow = thisTimer;
  switchStatus[Number(thisTimer.id) - 1] = 1;

}
 
function stopFunction() {
  let thisTimer = this.event.target.previousElementSibling.previousElementSibling.firstElementChild;
  //timeshow = thisTimer;
  switchStatus[Number(thisTimer.id) - 1] = 0;
  min[Number(thisTimer.id) - 1] = 0;
  second[Number(thisTimer.id) - 1] = 0;
  showtimeSet(Number(thisTimer.id) - 1,timer[Number(thisTimer.id) - 1])
}

setInterval(function () {
  for (i = 0; i <= 4; i++) {
    if (switchStatus[i] == 1) {
      second[i] = second[i] + 1;
      showtimeSet(i, timer[i]);
     }
  }
  //console.log(min);
  //console.log(second);
}, 1000);
 
function stopAllFunction() {
  for (i = 0; i <= 4; i++) {
    switchStatus[i] = 0;
    min[i] = 0;
    second[i] = 0;
    showtimeSet(i, timer[i]);
   }
 }

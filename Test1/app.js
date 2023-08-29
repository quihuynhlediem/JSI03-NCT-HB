let timeArray = [[5, 5, 5, 5, 5], [0, 0, 0, 0, 0]];
//let timeInterval = [];

// Chỉnh từ số sang hiển thị đồng hồ
function showtimeSet(min, second, t) {
  if (second == -1) {
    second = 59;
    secondShow = String(second);
    min = min - 1;
  } else if (second < 10) {
    secondShow = "0" + String(second);
  } else {
    secondShow = String(second);
  }

  if (min < 10) {
    minShow = "0" + String(min);
  } else {
    minShow = String(min);
  }
  timeshow.innerHTML = minShow + ' : ' + secondShow;
  timeArray[0][t] = min;
  timeArray[1][t] = second;
}

function startFunction() {
  //console.log(this.event.target.previousElementSibling.firstElementChild);
  let thisTimer = this.event.target.previousElementSibling.firstElementChild;
  //min = timeArray[0][Number(thisTimer.id) - 1];
  //second = timeArray[1][Number(thisTimer.id) - 1];
  timeshow = thisTimer;
  //console.log(min, second);
  timeInterval = setInterval(function(){
      timeArray[1][Number(thisTimer.id) - 1] = timeArray[1][Number(thisTimer.id) - 1] - 1;
      showtimeSet(timeArray[0][Number(thisTimer.id) - 1], timeArray[1][Number(thisTimer.id) - 1]);
    }, 1000);
}
 
function stopFunction() {
  let thisTimer = this.event.target.previousElementSibling.previousElementSibling.firstElementChild;
  timeshow = thisTimer;
  clearInterval(timeInterval);
  //min = 0;
  //second = 0;
  showtimeSet(timeArray[0][Number(thisTimer.id) - 1], timeArray[1][Number(thisTimer.id) - 1], Number(thisTimer.id) - 1);
}
 
//console.log(timeInterval);
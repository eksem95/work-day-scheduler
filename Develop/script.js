//do everything in military time, loop, start at 9, 
//compare to current time, assign color, convert to 
//12-hour, append to page. 

var currentDayEl = $('#currentDay'); 
var currentDay = moment().format('dddd, MMMM Do');

currentDayEl.append(currentDay);
//timeblocks element
var container = $('.container');
 var ampm = "AM";
  var hour = 9;  

for (var i = 0; i<9; i++) {
 if (hour==12){
    ampm = "PM";
  };
 

  container.append(
    `<div class="row">
  <div class="col hour">
    ${hour}${ampm}
  </div>
  <textarea class="col col-10"></textarea>
  <div class="col saveBtn"> save
  </div>
  </div>`)
  if (hour==12){
    hour = 0;
  }
  hour++;
  }



var currentDayEl = $('#currentDay');
var currentDay = moment().format('dddd, MMMM Do');
currentDayEl.append(currentDay);


//timeblocks element
var container = $('.container');
let ampm = "AM";
let hour = 9; //for rendering timeblocks
let timeblock = 9; //for the ID for each row
let hourID = 9; //the military time for comparing to the current hour


//render hour blocks
for (let i = 0; i < 9; i++) {
  if (hour == 12) {
    ampm = "PM";
  };
  container.append(
    `<div class="row" id = "${hour}">
  <div class="col hour">
    ${hour}${ampm}
  </div>
  <textarea class="col col-10">text area value</textarea>
  <div class="col saveBtn"> save
  </div>
  </div>`);
  if (hour == 12) {
    hour = 0;
  };
  hour++;
};

//apply appropriate color
for (let i = 0; i < 9; i++) {
  if (hourID == 13) {
    timeblock = 1
  }
  //console.log(timeblock, moment().hour(), hourID);
  if (hourID < moment().hour()) {
    $(`#${timeblock}`).children("textarea").addClass("past");
  }
  else if (hourID == moment().hour()) {
    $(`#${timeblock}`).children("textarea").addClass("present");
  }
  else if (hourID > moment().hour()) {
    $(`#${timeblock}`).children("textarea").addClass("future");
  }
  timeblock++;
  hourID++;
};




//save button
//local storage 
//key, sibling(hour).val())? value textArea.val()

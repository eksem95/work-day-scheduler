var currentDayEl = $('#currentDay');
var currentDay = moment().format('dddd, MMMM Do');
currentDayEl.append(currentDay);


//timeblocks element
var container = $('.container');
var ampm = "AM";
var hour = 9;


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
  hour = 9;
  if (hour > 10) {
    hour = hour + 12;
  }
  if (hour < moment().hour()) {
    $(`#${hour}`).children("textarea").addclass("past");
  }
  if (hour = moment().hour()) {
    $(`#${hour}`).children("textarea").addclass("present");
  }
  if (hour < moment().hour()) {
    $(`#${hour}`).children("textarea").addclass("future");
  }
  hour++
};

//save button
//local storage 
//key, sibling(hour).val())? value textArea.val()

//display date at top
var currentDayEl = $('#currentDay');
var currentDay = moment().format('dddd, MMMM Do');
currentDayEl.append(currentDay);


//timeblocks element
var container = $('.container');
var ampm = "AM";
var hour = 9; //for rendering timeblocks
var timeblock = 9; //for the ID for each row
var hourID = 9; //the military time for comparing to the current hour

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
  <textarea class="col col-10 text"></textarea>
  <button class="col saveBtn"> 
  save
  </button>
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
    $(`#${timeblock}`).children(".text").addClass("past");
  }
  else if (hourID == moment().hour()) {
    $(`#${timeblock}`).children(".text").addClass("present");
  }
  else if (hourID > moment().hour()) {
    $(`#${timeblock}`).children(".text").addClass("future");
  }
  timeblock++;
  hourID++;
};

//render data 
function getText () {
  //console.log($('#9 .text').val());
  $('#9 .text').val(localStorage.getItem("9"));
  $('#10 .text').val(localStorage.getItem("10"));
  $('#11 .text').val(localStorage.getItem("11"));
  $('#12 .text').val(localStorage.getItem("12"));
  $('#1 .text').val(localStorage.getItem("1"));
  $('#2 .text').val(localStorage.getItem("2"));
  $('#3 .text').val(localStorage.getItem("3"));
  $('#4 .text').val(localStorage.getItem("4"));
  $('#5 .text').val(localStorage.getItem("5"));

};
getText();
//save data/text input on click
$('.saveBtn').on('click',function(){
  
  var text = $(this).siblings("textarea").val();
  var time = $(this).parent().attr('id');

  //console.log(text, time);

  localStorage.setItem(time,text);

  getText();
});

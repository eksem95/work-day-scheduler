var currentDayEl = $('#currentDay'); 
var currentDay = moment().format('dddd, MMMM Do');
currentDayEl.append(currentDay);

//timeblocks element
var container = $('.container');
var ampm = "AM";
var hour = 9;  
var textInput = $('<textarea>');

function applyColor() {
  textInput.addClass("future");//addClass not working
  //apply color based on moment
  //compare current to moment().format(H AM/PM)
};

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
  };
  hour++;
  };

  container.each(applyColor());


//save button
//local storage 
//key, sibling(hour).val())? value textArea.val()

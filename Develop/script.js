let hour;
let currentDate = $("#currentDay");
let today = moment();
let currentHour = moment();

currentDate.text(today.format("dddd, MMMM Do"));

//time in military, compare to moment time to produce
//past present future
//var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
//$("#3a").text(reformatDate);

//compare each hour through  nth child?
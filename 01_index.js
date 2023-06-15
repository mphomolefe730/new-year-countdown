document.getElementById("days").textContent = "show dd";
document.getElementById("hrs").textContent = "show hh";
document.getElementById("mins").textContent = "show mm";
document.getElementById("secs").textContent = "show ss";

function runClock() {
  //set current date
  let currentDay = new Date();
  let dateStr = currentDay.toLocaleDateString();
  let timeStr = currentDay.toLocaleTimeString();

  document.getElementById("dateNow").innerHTML=`${dateStr}<br/>${timeStr}`; 

  //set newYear formatting 
  let newYear = new Date("January 2018, 1,");
  //takes currentDate year and adds 1 year | different/placeholder variable for next year
  let nextYear = currentDay.getFullYear()+1;
  //placeholder placed into newYear variable
  newYear.setFullYear(nextYear);

  //              2024 january 1 - current | answer is in milliseconds, so we convert
  let daysLeft = (newYear - currentDay)/(1000*60*60*24);
  //removes days left by days left whole number, leaving hours in milliseconds
  let hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
  let minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
  let secsLeft = (minsLeft - Math.floor(minsLeft))*60;

  document.getElementById("days").textContent= `${Math.floor(daysLeft)} Days`;
  document.getElementById("hrs").textContent= `${Math.floor(hrsLeft)} Hours`;
  document.getElementById("mins").textContent= `${Math.floor(minsLeft)} Minutes`;
  document.getElementById("secs").textContent= `${Math.floor(secsLeft)} Seconds`;
}

runClock()
//run command with 1000 millisec/1sec delay | like a infinite while loop with delay
setInterval("runClock()", 1000);
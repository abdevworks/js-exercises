let output = "";
const textPart01 = "Today is: ";
const d = new Date();
const dayNumber = d.getDay();
const listOfDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const day = listOfDays[dayNumber];
const textPart02 = ". \nCurrent time is: ";
const hours = d.getHours();
textPart03 = " ";
let timeOfDay;
const textPart04 = " : ";
const minutes = d.getMinutes();
const textPart05 = " : ";
const seconds = d.getSeconds();

if (12 - hours < 0) {
  timeOfDay = "PM";
  hours = Math.abs(12 - hours);
} else {
  timeOfDay = "AM";
}
output =
  textPart01 +
  day +
  textPart02 +
  hours +
  textPart03 +
  timeOfDay +
  textPart04 +
  minutes +
  textPart05 +
  seconds;

console.log(output);

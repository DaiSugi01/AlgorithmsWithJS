const allMonth = [ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];

const talkingCalendar = date => {
  
  let [year, month, day] = date.split("/");
  const d = new Date(date)
  month = allMonth[d.getMonth()];

  const dayToInt = parseInt(day);
  const lastNumOfDay = day.split("").slice(-1)[0];

  if (lastNumOfDay === "1" && day !== "11") {
    day = String(dayToInt) + "st";
  } else if (lastNumOfDay === "2" && day !== "12") {
    day = String(dayToInt) + "nd";
  } else if (lastNumOfDay === "3" && day !== "13") {
    day = String(dayToInt) + "rd";
  } else {
    day = String(dayToInt) + "th";
  }

  const result = `${month} ${day}, ${year}`;
  return result
};


/* TEST*/
// should be December 2nd, 2017
console.log(talkingCalendar("2017/12/02"));
// should be November 11th, 2007
console.log(talkingCalendar("2007/11/11"));
// should be August 24th, 1987
console.log(talkingCalendar("1987/08/24"));

console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2017/12/03"));
console.log(talkingCalendar("2017/12/11"));
console.log(talkingCalendar("2017/12/12"));
console.log(talkingCalendar("2017/12/13"));
console.log(talkingCalendar("2017/12/21"));
console.log(talkingCalendar("2017/12/22"));
console.log(talkingCalendar("2017/12/23"));
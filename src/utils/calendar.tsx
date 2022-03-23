
// interface ICalender{
//   day: string,
//   month: string;
//  year: number;
//  calendarDays: Array<string>;
//  numberOfTheDay: number
// }

// interface IWeekday{
// 0: string;
// 1: string;
// 2: string;
// 3: string; 
// 4: string;
// 5: string; 
// 6: string;
// }

// interface IMonth{
//   "01": string;
//   "02": string;
//   "03": string;
//   "04": string;
//   "05": string;
//   "06": string;
//   "07": string;
//   "08": string;
//   "09": string;
//   "010": string;
//   "011": string;
//   "012": string;
// }

export function calendar(){

const weekdays:Record<string, string> = {
  "0": "S",
  "1": "M",
  "2": "T",
  "3": "W", 
  "4": "T",
  "5": "F", 
  "6": "S"
}

const monthsOfTheYear: Record<string, string> = {
  "01": "January",
  "02":"February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08":"August",
  "09": "September",
  "010": "October",
  "011": "November",
  "012": "December"
}

   const date = new Date();
   const mnth = ("0" + (date.getMonth() + 1)).slice(-2);
   const dayOfTheWeek = date.getDay();
   const recentYear = date.getFullYear();
   const day = ("0" + date.getDate()).slice(-2);


  const arr1 = []
 const arr2 = []
  const dayAsNumber = parseInt(day)
  const leftSide = dayAsNumber - 9;
  const rightSide = dayAsNumber + 7;
 
  for(let i = dayAsNumber; i >= leftSide; i--){
    const newDate= new Date(`${mnth}-${i}-${recentYear}`)
    const dayLetter: string = weekdays[newDate.getDay().toString()]
    arr1.unshift(`${dayLetter}${i}`);
  }

  for(let i = (dayAsNumber + 1); i < rightSide; i++){
    const newDate= new Date(`${mnth}-${i}-${recentYear}`)
    const dayLetter = weekdays[newDate.getDay()]
    arr2.push(`${dayLetter}${i}`);
  }
  const finalDays = [...arr1, ...arr2]


  return{
    "day": weekdays[dayOfTheWeek],
    "month": monthsOfTheYear[mnth],
   "year": recentYear,
   "calendarDays": finalDays,
   "numberOfTheDay": dayAsNumber
  }
}


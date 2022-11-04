// Write a JavaScript program to display the current day and time in the following format.
const days = [
  {
    value: 0,
    currentDay: 'Sunday',
  },
  {
    value: 1,
    currentDay: 'Monday',
  },
  {
    value: 2,
    currentDay: 'Tuesday',
  },
  {
    value: 3,
    currentDay: 'Wednesday',
  },
  {
    value: 4,
    currentDay: 'Thursday',
  },
  {
    value: 5,
    currentDay: 'Friday',
  },
  {
    value: 6,
    currentDay: 'Saturday',
  },
];

let currentDayAndTime = () => {
  let timeStore = new Date();
  let day = timeStore.getDay();
  let timeHrs = timeStore.getHours();
  let timeMinutes = timeStore.getMinutes();
  let timeSeconds = timeStore.getSeconds();

  days.forEach((e) => {
    if (e.value === day) {
      console.log(
        ` Today is ${e.currentDay} Current Time is ${timeHrs}:${timeMinutes}:${timeSeconds}`,
      );
    }
  });
};

currentDayAndTime();

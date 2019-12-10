const currentYear = 2019;
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octomber',
    'November',
    'December'
];

const colors = ['#2d6b5f', '#72e3a6', '#edbf98', '#ea3d36'];
const defaultColor = '#888';
let activeColor = '';
const calendar = document.getElementById('calendar');
const moods = document.getElementById('.mood');
const randomize = document.querySelector('#randomize');
const clear = document.querySelector('#clear');

moods.forEach(mood => {
   mood.addEventListener('click', () => {
       if (mood.classList.contains('selected')) {
           mood.classList.remove('selected');
           activeColor = defaultColor;
       }else {
           moods.forEach(mood => {
               mood.classList.remove('selected');
           });

           mood.classList.add('selected');
           activeColor = getComputedStyle(mood).getPropertyValue('color');
       }
   })
});

const getAllDays = year => {
    const firstDay = new Date(`January 1 ${year}`);
    const lastDay = new Date(`December 31 ${year}`);

    const days = [firstDay];
    let lastDayInArray = firstDay;

    while (lastDayInArray.getTime() !== lastDay.getTime()) {
        days.push(addDays(lastDayInArray, 1));
        lastDayInArray = days[days.length - 1];
    }

    return days;
};

const dates = getAllDays(currentYear);

let monthsHTML = '';

months.forEach((month, idx) => {
    monthsHTML += `<div class="months month_${idx}">
        <h3>${month}</h3>
        <div class="week_days_container">
            ${weekDays
        .map(day => `<div class="week_days">${day}</div>`)
        .join('')}
        </div>
        <div class="days_container"></div>
    </div>`;
});

calendar.innerHTML = monthsHTML;

dates.forEach(date => {
   const month = date.getMonth();
   const monthE1 = document.querySelector(`.month_${month} .days_container`);

   
});
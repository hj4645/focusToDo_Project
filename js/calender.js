/*

const clockDisplay = document.getElementById('clock');
const calendarButton = document.getElementById('calender_button');
const calendarContainer = document.getElementById('calendar_container');

let isCalendarVisible = false;

//Fullcalender 초기화
document.addEventListener('DOMContentLoaded', function() {
    const calendar = new FullCalendar.Calendar(calendarContainer, {
        initialView: 'dayGridMonth'
    });
    
    calendar.render();
});

function toggleCalendar() {
    isCalendarVisible = !isCalendarVisible;
    calendarContainer.classList.toggle('hidden', !isCalendarVisible);
    clockDisplay.classList.toggle('calender-visible', isCalendarVisible);
}

calendarButton.addEventListener('click', toggleCalendar);

// 이벤트 핸들러 등록
document.addEventListener('DOMContentLoaded', () => {

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
            calendarButton.classList.remove('hidden');
    });
}); 

*/
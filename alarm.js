// 1.The code starts by declaring several variables.The currentTime variable references an element with a tag of "h1", content references an element with a class of "content", selectMenu references all elements with a tag of "select", and setAlarmBtn references an element with a tag of "button".

const currentTime = document.querySelector("h1"),
    content = document.querySelector(".content"),
    selectMenu = document.querySelectorAll("select"),
    setAlarmBtn = document.querySelector("button");

// 2.The alarmTime and isAlarmSet variables are declared as empty and a new audio element, ringtone, is created using the "assets/ringtone.mp3" file path.

let alarmTime, isAlarmSet,
    ringtone = new Audio("assets/ringtone.mp3");

// 3.A for loop starts iterating from 12 down to 1. If the current iteration value, i, is less than 10, a leading zero is added to the value.A new option element is created using the current iteration value and inserted into the first child of the first select element in the selectMenu variable.

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

// 4.Another for loop starts iterating from 59 down to 0. If the current iteration value, i, is less than 10, a leading zero is added to the value.A new option element is created using the current iteration value and inserted into the first child of the second select element in the selectMenu variable.

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

// 5.A third for loop starts iterating from 2 down to 1. A new option element is created using the current iteration value and inserted into the first child of the third select element in the selectMenu variable.

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

// 6.A setInterval function is set to run every 1 second.Inside the function, a new date object is created, and the hour, minute, and second values are stored in variables h, m, and s respectively.An ampm variable is set to "AM".

setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";

    // 7.The code checks if the hour is greater than or equal to 12, if yes, it subtracts 12 from the hour and sets the ampm variable to "PM".

    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }

    // 8.The code checks if the hour is equal to 0, if yes, it sets the hour to 12. Then it checks if the hour is less than 10, if yes, it adds a leading zero to the hour.It also checks if the minutes and seconds are less than 10, if yes, it adds a leading zero to them.

    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // 9.The current time is displayed on the page using the innerText property of the currentTime element.

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    // 10.The code checks whether the alarmTime is equal to the current time.If it is, it plays the ringtone, which is set to loop.

    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});

// 11.A function named setAlarm() is declared which does the following:

function setAlarm() {

    // 12.If an alarm is already set, it clears the alarm time, pauses the ringtone, removes a class from the content element and changes the text of the button to "Set Alarm"

    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    // 13.Else, it assigns the selected time from the selectMenu variables to the alarmTime variable, sets the isAlarmSet variable to true, adds a class to the content element and changes the text of the button to "Clear Alarm".


    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}

// 14.An event listener is added to the setAlarmBtn element, which listens for a click event and runs the setAlarm function when the event occurs.

setAlarmBtn.addEventListener("click", setAlarm);














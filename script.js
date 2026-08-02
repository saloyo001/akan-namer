const maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
];

const femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
];

const weekDays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];


const meanings = [
    "Creative and confident.",
    "Peaceful and calm.",
    "Brave and determined.",
    "Wise and curious.",
    "Strong and courageous.",
    "Kind and caring.",
    "A natural leader and responsible."
];

document.getElementById("arcana").addEventListener("submit", function (event) {

    event.preventDefault();

    let birthdate = document.getElementById("birthdate").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (birthdate == "") {
        alert("Date needed.");
        return;
    }

    if (gender == null) {
        alert("Please choose a gender.");
        return;
    }

    let parts = birthdate.split("-");

    let year = Number(parts[0]);
    let month = Number(parts[1]);
    let day = Number(parts[2]);

    let CC = Math.floor(year / 100);
    let YY = year % 100;

    let dayIndex = (
        (Math.floor((5 * CC) / 4) - (2 * CC) - 1) +
        Math.floor((5 * YY) / 4) +
        Math.floor((26 * (month + 1)) / 10) +
        day
    ) % 7;

    if (dayIndex < 0) {
        dayIndex = dayIndex + 7;
    }

    let akanName = "";

    if (gender.value == "male") {
        akanName = maleNames[dayIndex];
    } else {
        akanName = femaleNames[dayIndex];
    }

    document.getElementById("result").innerHTML =
        "<h2>Your Akan Name</h2>" +
        "<p><strong>Birth Date:</strong> " + birthdate + "</p>" +
        "<p><strong>Day Born:</strong> " + weekDays[dayIndex] + "</p>" +
        "<p><strong>Akan Name:</strong> " + akanName + "</p>" +
        "<p><strong>Meaning:</strong> " + meanings[dayIndex] + "</p>";

});

document.getElementById("resetBtn").addEventListener("click", function () {

    document.getElementById("arcana").reset();

    document.getElementById("result").innerHTML = "";

    document.getElementById("birthdate").focus();

});
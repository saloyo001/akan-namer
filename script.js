const maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
];

const femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
];

const weekDays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
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
        alert("We don't do non-binary, pick one.");
        return;
    }

    let date = new Date(birthdate);
    let dayIndex = date.getDay();

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
        "<p><strong>Akan Name:</strong> " + akanName + "</p>";
    
});

document.getElementById("resetBtn").addEventListener("click", function () {

    document.getElementById("arcana").reset();

    document.getElementById("result").innerHTML = "";

    document.getElementById("birthdate").focus();

});

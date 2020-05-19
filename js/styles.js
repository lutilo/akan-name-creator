function validateform() {
    var day = Number(document.getElementById("day").value);
    var month = Number(document.getElementById("month").value);
    var year = Number(document.getElementById("year").value);
    var century = Number(document.getElementById("centuary").value);
    var genderSelected = document.getElementsByName("gender");
    function genderselected() {
        for (var gender of genderSelected) {
            if (gender.checked) {
                return gender.value;
            }
        }
    };
    var genderValue = genderselected();
    function dayValid() {
        if (day < 1 || day > 31) {
            alert("Invalid day")
            return false;
        } else {
            return true;
        }
    }
    function monthValid() {
        if (month < 1 || month > 12) {
            alert("Invalid month");
            return false;
        } else {
            return true;
        }
    }
    var isDayValid = dayValid();
    var isMonthValid = monthValid();
    var dayIndex = Math.round((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
    var akanName;
    if (genderValue === "male") {
        switch (dayIndex) {
            case 0:
                akanName = "Kwasi";
                alert("Born on Sunday : Kwasi");
                break;
            case 1:
                akanName = "Kwadwo";
                alert("Born on Monday : Kwadwo");
                break;
            case 2:
                akanName = "Kwabena";
                alert("Born on Tuesday : Kwabena");
                break;
            case 3:
                akanName = "Kwaku";
                alert("Born on Wednesday : Kwaku");
                break;
            case 4:
                akanName = "Yaw";
                alert("Born on Thursday : Yaw");
                break;
            case 5:
                akanName = "Kofi";
                alert("Born on Friday : Kofi");
                break;
            case 6:
                akanName = "Kwame";
                alert("Born on Saturday : Kwame");
                break;
            default:
                akanName = "Please input the correct details!"
                alert("Please input the correct details!");
        }
    } else if (genderValue = "female") {
        switch (dayIndex) {
            case 0:
                akanName = "Akosua";
                alert("Born on Sunday : Akosua");
                break;
            case 1:
                akanName = "Adwoa";
                alert("Born on Monday : Adwoa");
                break;
            case 2:
                akanName = "Abenaa";
                alert("Born on Tuesday : Abenaa");
                break;
            case 3:
                akanName = "Akua";
                alert("Born on Wednesday : Akua");
                break;
            case 4:
                akanName = "Yaa";
                alert("Born on Thursday : Yaa");
                break;
            case 5:
                akanName = "Afua";
                alert("Born on Friday : Afua");
                break;
            case 6:
                akanName = "Ama";
                alert(" Born on Saturday : Ama");
                break;
            default:
                akanName = "Please input the correct details!"
                alert("Please input the correct details!");
        }
    } else {
        alert("Please try again with the correct data.");
    }
}
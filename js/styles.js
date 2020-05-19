function akanName() {
    var input = document.getElementById('birth').value;
    var d = new Date(input);
    var CC, MM, YY;
    if (!!d.valueOf()) {
      YY = d.getFullYear();
      MM = d.getMonth();
      CC = d.getDate();
  
    }else {/* Invalid date */
           alert("Invalid date");
         }
    var male =  ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
  
    var dayCalculate = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10))) % 7;
  
    var gender = document.getElementById('genders').value;
    console.log(dayCalculate);
    if (document.getElementById('male').checked) {
      gender = document.getElementById('male').value;
      alert(" Since you were born on " + dayOfTheWeek[dayCalculate] + ',' + " your name is " + male[dayCalculate]);
      document.getElementById('result').innerHTML = male[dayCalculate];
  
    }
    if (document.getElementById('female').checked) {
      gender = document.getElementById('female').value;
      alert(" Since you were born on " + dayOfTheWeek[dayCalculate] + ',' + " your name is " + female[dayCalculate]);
      document.getElementById('result').innerHTML = female[dayCalculate];
  
    }else {
      alert("choose your gender");
    }
  
  };
  
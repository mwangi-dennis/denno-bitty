document.getElementById("jim").addEventListener("click", myScore);

function myScore(){
  var myScore =  parseInt(prompt("Enter score:"));
alert('tey');
  if (myScore>=80 && myScore<100){
    document.getElementById("para").innerHTML="A";
   }else if (myScore>=79 && myScore>75) {
   document.getElementById("para").innerHTML="A-";
   }else if (myScore>=74 && myScore>70) {
     document.getElementById("para").innerHTML="B+";
   }else if (myScore>=69 && myScore>65) {
     document.getElementById("para").innerHTML="B";
   }else if (myScore>=64 && myScore>60) {
    document.getElementById("para").innerHTML="B-";
   }else if (myScore>=59 && myScore>55) {
     document.getElementById("para").innerHTML="C+";
   }else if (myScore>=54 && myScore>50) {
     document.getElementById("para").innerHTML="C";
  }else if (myScore>=49 && myScore>45) {
     document.getElementById("para").innerHTML="c-";
   }else if (myScore>=44 && myScore>40) {
    document.getElementById("para").innerHTML="D+";
  }else if (myScore>=39 && myScore>35) {
     document.getElementById("para").innerHTML="D";
   }else if (myScore>=34 && myScore>30) {
     document.getElementById("para").innerHTML="D-";
   }else if (myScore>=29 && myScore>0) {
     document.getElementById("para").innerHTML="E";
   }else {
     document.getElementById("para").innerHTML ="please enter a valid score";
   }

}

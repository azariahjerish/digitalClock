setInterval(function () {
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var am_pm = "PM";

        if (hour >= 12) {
            hour = hour - 12;
            am_pm = "AM";
        }
        if (hour == 0) {
            hour = 12;
        }
        

        if (hour < 10) {
            hour="0"+hour
        }
        if (min < 10) {
            min="0"+min
        }
        if (sec < 10) {
            sec="0"+sec
        } 

        document.getElementById("hrs12").innerHTML=hour+":"+min+":"+sec+" "+am_pm;

    }, 1000);

setInterval(function () {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if (hour < 10) {
        hour="0"+hour
    }
    if (min < 10) {
        min="0"+min
    }
    if (sec < 10) {
        sec="0"+sec
    }

    document.getElementById("hrs24").innerHTML=hour+":"+min+":"+sec;

}, 1000);


{
    document.getElementById("light").addEventListener("click", function (e) {
    var time = document.getElementsByClassName("time");
    for (i = 0; i < time.length; i++){
        time[i].setAttribute("style", "color:black; background-color:white");
    }
    var change = document.getElementsByClassName("change");
    for (i = 0; i < change.length; i++){
        change[i].setAttribute("style", "color:white; background-color:black");
    }
        document.getElementById("light").style.display = "none";
        e.stopPropagation;
    }) 
    
}

{
    document.getElementById("dark").addEventListener("click", function (e) {
    var time = document.getElementsByClassName("time");
    for (i = 0; i < time.length; i++){
        time[i].setAttribute("style", "color:white; background-color:black");
    }
    var change = document.getElementsByClassName("change");
    for (i = 0; i < change.length; i++){
        change[i].setAttribute("style", "color:black; background-color:white");
    }
        document.getElementById("dark").style.display = "none";
        e.stopPropagation;
    }) 
}

var twentyfour = document.getElementById("twentyfour")
var twelve = document.getElementById("twelve");

twelve.addEventListener("click", (e) => {
    twelve.setAttribute("style", "display:none")
    twentyfour.setAttribute("style", "display:block")
    e.stopPropagation;
})

twentyfour.addEventListener("click", (e) => {
    twelve.setAttribute("style", "display:block")
    twentyfour.setAttribute("style","display:none")
    e.stopPropagation;
})

var hrs24 = document.getElementById("hrs24");
var hrs12 = document.getElementById("hrs12");


twelve.addEventListener("click", (e) => {
    hrs24.setAttribute("style","display:none")
    hrs12.setAttribute("style", "display:block")
    e.stopPropagation;
})

twentyfour.addEventListener("click", (e) => {
    hrs24.setAttribute("style","display:block")
    hrs12.setAttribute("style","display:none")
    e.stopPropagation;
})

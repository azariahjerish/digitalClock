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


document.getElementById("button").addEventListener("click",()=>{
    var button=document.getElementById("button");
    if(button.checked==true){
        document.getElementById("hrs24").setAttribute("style","display:none");
        document.getElementById("hrs12").setAttribute("style","display:block");
    }
    else{
        document.getElementById("hrs12").setAttribute("style","display:none");
        document.getElementById("hrs24").setAttribute("style","display:block");
    }
})

// document.getElementById("body").addEventListener("click",()=>{

// })


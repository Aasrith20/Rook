function Time(){
    var hours = document.getElementById("first_box");
    var minutes = document.getElementById("second_box");
    var a = new Date();

    if (a.getHours() > 12) {
        hours.innerHTML = a.getHours() - 12;
    }
    else {
        hours.innerHTML = a.getHours();
    }
    if(Math.floor(a.getMinutes()/10) == 0){
     minutes.innerHTML ="0"+ String(a.getMinutes())}
    else{
        minutes.innerHTML = a.getMinutes();
    }

}
function Initiate(){
    Time();
    setInterval(Time,1000);

}

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
function Start(){
    function pomo(val,val_1){
    
        if(val[0]==0 && val_1[0]==0){
            clearInterval(b);

            document.getElementById("start").style.visibility = "visible";
            document.getElementById("moving_box").style.visibility = "hidden";
        }
        document.getElementById("first_box").innerHTML=val[0];
        if(Math.floor(val_1[0]/10)==0){
        document.getElementById("second_box").innerHTML="0"+String(val_1[0]);}
        else{
            document.getElementById("second_box").innerHTML =val_1;
        }
                if(val_1[0]==0){
                    val[0]=val[0]-1;
                    val_1[0]=59;
                }
        val_1[0]=val_1[0]-1;
    }
    
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("moving_box").style.visibility="visible";
    var val=[1]
    var val_1=[0]
     var b=setInterval(pomo,1000,val,val_1)
}

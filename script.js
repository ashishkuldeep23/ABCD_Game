


var ren = Math.floor(Math.random() * 26+1);
// alert(r)

let val = document.getElementById(ren).innerText;
// console.log( ren,"and", val)

var t = document.getElementById("timer").innerText
t=parseInt(t)

// t=0

// alert(typeof(t))

function timer(){

    var lesser = setInterval(() => {
        
        if (t <= 0){
            clearInterval(lesser) 
            
            game_over()
      
            document.getElementById("result").innerHTML=val

            // For innerText and style when timer end ---->
            
            let displayDiv = document.getElementById("result_Img_div")

            displayDiv.style.backgroundColor = "Cyan"
            displayDiv.style.fontSize = "30px"
            displayDiv.style.display = "flex"
            displayDiv.style.textAlign = "Centre"
            displayDiv.innerHTML = "Try Again Please"
          
        
        }

        if( t >= 10){
            document.getElementById("timer").innerHTML=t
        }else {
            document.getElementById("timer").innerText="0"+t
        }

        t -= 1

    }, 1000);

}


function game_over(){
    document.getElementById("timer").style.display="none";
    document.getElementById("inp_sub_image").innerHTML="<b>GAME OVER</b>";
};




function refresh(){

    //For refresh page these two will use. 
    history.go(0)
    // or 
    // window.location.reload()


}

// // Below var created to fix bug (Bug is submite before start , so we don't want this)
let startAtLeastOnce = 0

function start(){
    document.getElementById(ren).style.display="none";
    // console.log(r)

    startAtLeastOnce++

    timer()
    // refresh()

    // // Using same btn for start and refresh --->
    document.getElementById("b1").innerHTML  = "Refresh"

    if(startAtLeastOnce > 1 ){
        refresh()
    }
    

}


function submit(){


  if(startAtLeastOnce > 0){
    
    let put = document.getElementById("inpt").value;

    put = put.toUpperCase()

    if( val == put ){
        // console.log("Yes")

        t = 0
        document.getElementById("r").style.height = "140px"
        document.getElementById("w").style.display="none"

        game_over()
        document.getElementById("result").innerHTML=val;

       
       
    }else{
        t = 0
        document.getElementById("w").style.height = "90px"
        document.getElementById("r").style.display="none"

        game_over()
        document.getElementById("result").innerHTML=val;

       
    }}



}







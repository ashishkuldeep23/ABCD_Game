

var ren = Math.floor(Math.random() * 26+1);
// alert(r)

let val = document.getElementById(ren).innerText;
// console.log( ren,"and", val)

var t = document.getElementById("timer").innerText
t=parseInt(t)

// t=0

// alert(typeof(t))

function ti(){


    

    var lesser = setInterval(() => {
        
        if (t <= 0){
            clearInterval(lesser) 
            
            game_over()
      
            document.getElementById("result").innerHTML=val
          
        
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



function start(){
    document.getElementById(ren).style.display="none";
    // console.log(r)
    ti()
    // refresh()

}


function submit(){

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

       
    }

}




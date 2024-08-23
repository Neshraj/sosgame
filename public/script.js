let player = 1;
pp1=0;
pp2=0;
function msg(ind){
    //let allbox = document.querySelectorAll(".box");
    //alert('cliked'+ind+' '+player);
    if(player==1){
        document.getElementById('playermove').style.backgroundColor="rgb(198, 255, 181)";
        document.getElementById('body').style.backgroundColor="rgb(198, 255, 181)";
        player = 2;
        document.getElementById(ind).style.borderColor="rgb(255, 129, 129)";
        document.getElementById(ind).innerText="S";
        document.getElementById(ind).disabled=true;
        //alert(ind+1);
        if(document.getElementById(ind-1).innerText=='O' && document.getElementById(ind-2).innerText=='S'){
            document.getElementById(ind).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind-1).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind-2).style.backgroundColor="rgb(255, 181, 181)";
            pp1=pp1+1;
            document.getElementById('pl1p').innerText=pp1;
            

        }

        if(document.getElementById(ind+1).innerText=='O' && document.getElementById(ind+2).innerText=='S'){
            document.getElementById(ind).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind+1).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind+2).style.backgroundColor="rgb(255, 181, 181)";
            pp1=pp1+1;
            document.getElementById('pl1p').innerText=pp1;
            
        }

        if(document.getElementById(ind-20).innerText=='S' && document.getElementById(ind-10).innerText=='O'){
            document.getElementById(ind).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind-20).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind-10).style.backgroundColor="rgb(255, 181, 181)";
            pp1=pp1+1;
            document.getElementById('pl1p').innerText=pp1;
            
        }

        if(document.getElementById(ind+20).innerText=='S' && document.getElementById(ind+10).innerText=='O'){
            document.getElementById(ind).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind+20).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind+10).style.backgroundColor="rgb(255, 181, 181)";
            pp1=pp1+1;
            document.getElementById('pl1p').innerText=pp1;
            
        }

        if(document.getElementById(ind-11).innerText=='O' && document.getElementById(ind-22).innerText=='S'){
            document.getElementById(ind).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind-11).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind-22).style.backgroundColor="rgb(255, 181, 181)";
            pp1=pp1+1;
            document.getElementById('pl1p').innerText=pp1;
            
        }

        if(document.getElementById(ind-9).innerText=='O' && document.getElementById(ind-18).innerText=='S'){
            document.getElementById(ind).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind-9).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind-18).style.backgroundColor="rgb(255, 181, 181)";
            pp1=pp1+1;
            document.getElementById('pl1p').innerText=pp1;
            
        }


        if(document.getElementById(ind+9).innerText=='O' && document.getElementById(ind+18).innerText=='S'){
            document.getElementById(ind).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind+9).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind+18).style.backgroundColor="rgb(255, 181, 181)";
            pp1=pp1+1;
            document.getElementById('pl1p').innerText=pp1;
            
        }

        if(document.getElementById(ind+11).innerText=='O' && document.getElementById(ind+22).innerText=='S'){
            document.getElementById(ind).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind+11).style.backgroundColor="rgb(255, 181, 181)";
            document.getElementById(ind+22).style.backgroundColor="rgb(255, 181, 181)";
            pp1=pp1+1;
            document.getElementById('pl1p').innerText=pp1;
            
        }


    }
    else{
        document.getElementById('playermove').style.backgroundColor="rgb(255, 181, 181)";
        document.getElementById('body').style.backgroundColor="rgb(255, 181, 181)";
        player = 1;
        document.getElementById(ind).style.borderColor="rgb(48, 140, 20)";
        document.getElementById(ind).innerText="O";
        document.getElementById(ind).disabled=true;

        if(document.getElementById(ind-1).innerText=='S' && document.getElementById(ind+1).innerText=='S'){
            document.getElementById(ind).style.backgroundColor="rgb(198, 255, 181)";
            document.getElementById(ind-1).style.backgroundColor="rgb(198, 255, 181)";
            document.getElementById(ind+1).style.backgroundColor="rgb(198, 255, 181)";
            pp2=pp2+1;
            document.getElementById('pl2p').innerText=pp2;
            

        }


        if(document.getElementById(ind-10).innerText=='S' && document.getElementById(ind+10).innerText=='S'){
            document.getElementById(ind).style.backgroundColor="rgb(198, 255, 181)";
            document.getElementById(ind-10).style.backgroundColor="rgb(198, 255, 181)";
            document.getElementById(ind+10).style.backgroundColor="rgb(198, 255, 181)";
            pp2=pp2+1;
            document.getElementById('pl2p').innerText=pp2;
            
        }


        if(document.getElementById(ind-11).innerText=='S' && document.getElementById(ind+11).innerText=='S'){
            document.getElementById(ind).style.backgroundColor="rgb(198, 255, 181)";
            document.getElementById(ind-11).style.backgroundColor="rgb(198, 255, 181)";
            document.getElementById(ind+11).style.backgroundColor="rgb(198, 255, 181)";
            pp2=pp2+1;
            document.getElementById('pl2p').innerText=pp2;
            
        }

        if(document.getElementById(ind-9).innerText=='S' && document.getElementById(ind+9).innerText=='S'){
            document.getElementById(ind).style.backgroundColor="rgb(198, 255, 181)";
            document.getElementById(ind-9).style.backgroundColor="rgb(198, 255, 181)";
            document.getElementById(ind+9).style.backgroundColor="rgb(198, 255, 181)";
            pp2=pp2+1;
            document.getElementById('pl2p').innerText=pp2;
            
        }


        
    }
}

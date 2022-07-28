window.onload=function(){

$("#start").click(function(){restart();})

}







const restart=function (){
   
    $('.boundary').css("background-color","#eeeeee");
    $("#status").text("keep playing");

  
    
       loose();
       win();
       mazeLeave();
   
};
const loose=function(){
    $(".boundary").mouseenter(()=>{
        $('.boundary').css("background-color","red");
        $("#status").text("you loose!! Click the S to Play again");
        ditachEvanets();

       });

}
const mazeLeave=function(){
    $("#maze").mouseleave(()=>{
        $('.boundary').css("background-color","red");
        $("#status").text("you loose!! Click the S to Play again");
        ditachEvanets();
    });

}

const win=function(){
   
    $("#end").mouseenter(()=>{
    $("#status").text("you win! Click the S to Play again");
    ditachEvanets();
 
   }) 

};


const ditachEvanets=function(){
    $('.boundary').off('mouseenter');
    $('#end').off('mouseenter');
    $("#maze").off('mouseleave');

}
   
    
    
   

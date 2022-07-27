window.onload = function () {
    $( "#stop" ).prop('disabled', true);
    $( "#start" ).click (() => { display(1); });
    $( "#stop" ).click(() => { display(0); });
}


let result = [];
let index = 0;
let speed=0;
let animation =''

const display = function (state) {

    if (state === 1) {
        $( "#start" ).prop("disabled",true);
        $( "#stop" ).prop("disabled",false)
        $("#animation").prop("disabled",true);
        
       
        animation =  $('#animation').val();
       
        result = treat(animation);
        index = 0;
        
        myinterval=setInterval(myfunction, 250);

        $('input[name=checkbox]').change(function() {
            if( $("#start").is(":disabled")){
            if ($(this).is(':checked')) {
                clearInterval(myinterval);
                myinterval=setInterval(myfunction, 50);
            } else {
                clearInterval(myinterval);
                myinterval=setInterval(myfunction, 250);
            }
        }
          });


    

    } else {
       $("#start").prop("disabled",false);
       $("#stop").prop("disabled",true) ;
       $("#animation").prop("disabled",false);
        clearInterval(myinterval);
        index=0;
    }
}


const myfunction = function(){
    $("#textarea").val( result[index]);
    index++;
    if (index === result.length) { index = 0; }
    document.getElementById("textarea").style.fontSize=document.getElementById("size").value;

}








const treat = function (animation) {
    let arr = [];
    if (animation === "Exercise") {

        arr = ANIMATIONS["Exercise"].split("=====\n");
        return arr;
    }
    if (animation === "Juggler") {

        arr = ANIMATIONS["Juggler"].split("=====\n");
        return arr;
    }

    if (animation === "Bike") {

        arr = ANIMATIONS["Bike"].split("=====\n");
        return arr;
    }
    if (animation === "Dive") {

        arr = ANIMATIONS["Dive"].split("=====\n");
        return arr;
    }
    if (animation === "Custom") {

        arr = ANIMATIONS["Custom"].split("=====\n");
        return arr;
    }
    if (animation === "Blank") {

        arr = ANIMATIONS["Blank"].split("=====\n");
        return arr;
    }

}
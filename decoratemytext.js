 function staftodo(){
   
    let fs = window.getComputedStyle(document.getElementById("area"),null).getPropertyValue('font-size');
    let newfontsize=parseInt(fs)+2;
    document.getElementById("area").style.fontSize= newfontsize+'pt';
}

function alertme(){


   

setInterval(() => {
    staftodo();
}, 500);



}



function decorate(){


if(document.getElementById("check").checked){
    document.getElementById("area").style.fontWeight = 'bold';
    document.getElementById("area").style.color = 'green';
    document.getElementById("area").style.textDecoration = 'underline';
    document.body.style.backgroundImage=  "url('./images/movie/background.png')";


}
else{

    document.getElementById("area").style.fontWeight = 'normal';
    document.getElementById("area").style.color = 'black';
    document.getElementById("area").style.textDecoration = 'none';
    document.body.style.backgroundImage=  "none";
}

}

function malkovitch(){

let str=document.getElementById("area").value;
let result='';
let arr=str.split(' ');

for (let index = 0; index < arr.length; index++) {
   if(arr[index].length>=5)
arr[index]='Malkovitch';

}

alert(arr[0]);


for (let index = 0; index < arr.length; index++) {
   result+=arr[index] + ' ';
 
 }

 document.getElementById("area").value=result;

}

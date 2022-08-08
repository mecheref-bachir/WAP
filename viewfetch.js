$(document).ready(
    function () {
        $("#view_button").click(()=>{
            getInfo ();
        });
    });


function getInfo(){
    fetch("https://api.nasa.gov/planetary/apod?"+ new URLSearchParams({
    api_key: "KVcjZyRDsCLsJthGym1LEDWwIAprbqBDfOGClsoL",
    date: $("#date").val()
}))
  .then(resp => resp.json())
  .then(function(data) {
     console.log(data)
     $("#title").text(data.title);
     $("#pic").attr("src", data.url);
     $("#description").text(data.explanation);
   
  })
  .catch(function(error) {
    console.log(error);
  })
}


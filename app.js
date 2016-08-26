
$(document).ready(function() {
  console.log("js works!");

  //var car1left = $('#car1').css('margin-left');
  //var car2left = $('#car2').css('margin-left');

  $(document).keypress(function(event) {
    var car1left = $('#car1').css('margin-left');
    var car2left = $('#car2').css('margin-left');

    //on 'D' press
    if(event.keyCode === 100){
      $('#car1').css('margin-left', '+=30px');
      console.log($('#car1').css('margin-left'));
      console.log(event.keyCode);
      if(car1left === "930px"){
        $('#score').append("car1wins");

      }
    };

    //on 'L' press
    if(event.keyCode === 108){
      $('#car2').css('margin-left', '+=30px');
      console.log(car2left);
      console.log(event.keyCode);
      if(car2left === "930px"){
        $('#score').append("car2wins");
      }
    };
  });




  //if(car1left === ){

  //}

})

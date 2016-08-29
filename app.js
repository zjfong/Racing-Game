// keypresses
// w 119
// a 97
// s 115

// i 105
// j 106
// k 107


$(document).ready(function() {
  console.log("js works!");




var car1score = 0;
var car2score = 0;
var ableMove = false;
  //var car1left = $('#car1').css('margin-left');
  //var car2left = $('#car2').css('margin-left');

  $(document).keypress(function(event) {
    var car1left = $('#car1').css('margin-left');
    var car2left = $('#car2').css('margin-left');


    if(ableMove === true){
    //on 'D' press
    if(event.keyCode === 100){
      if(car1left< "980px"){
        $('#car1').css('margin-left', '+=30px');
        console.log($('#car1').css('margin-left'));
        //console.log(event.keyCode);
        //console.log(car1left + "1");

      };
    };

    // //on 'W' press
    // if(event.keyCode === 119){
    //   $('#car1').css('margin-top', '-=30px');
    // };
    // //on 'A' press
    // if(event.keyCode === 97){
    //   $('#car1').css('margin-left', '-=5px');
    //   console.log(car1left)
    // };
    // //on 'S' press
    // if(event.keyCode === 115){
    //   $('#car1').css('margin-top', '+=30px');
    // };

    //on 'L' press
    if(event.keyCode === 108){
      if(car2left< "980px"){
        $('#car2').css('margin-left', '+=30px');
        console.log(car2left);
        //console.log(event.keyCode);
      };
    };


    if($('#car1').css('margin-left') === "920px"){
          car1score++;
          $('#score1').empty();
          $('#score1').append(car1score);
          ableMove = false;
          console.log("help")
    };

    if($('#car2').css('margin-left') === "920px"){
          car2score++;
          $('#score2').empty();
          $('#score2').append(car2score);
          ableMove = false;
          console.log("help")
    };
  };
  });

var buttonClicked = false;
  $('.btn-default').click(function(event) {
    if (buttonClicked === false){
      buttonClicked = true;
      $('#car1').css('margin-left', '50px');
      $('#car2').css('margin-left', '50px');
      startGreenTimer();
      startRedTimer();
      startYellowTimer();
      startClearTimer();
    };
  });




  function startRedTimer(){
    setTimeout(redTimer, 1000);
  }
  function startYellowTimer(){
    setTimeout(yellowTimer, 2000);
  }
  function startGreenTimer(){
    setTimeout(greenTimer, 3000);
  }
  function startClearTimer(){
    setTimeout(clearTimer, 4000);
  }

  function redTimer(){
    $('#red').css('background-color', 'red');
  }
  function yellowTimer(){
    $('#red').css('background-color', 'black')
    $('#yellow').css('background-color', 'yellow')
  }
  function greenTimer(){
    $('#yellow').css('background-color', 'black')
    $('#green').css('background-color', 'green')
    $('#text').append("GO!");
    ableMove = true;
  }
  function clearTimer(){
    $('#green').css('background-color', 'black')
    $('#text').empty();
    buttonClicked = false;
  }



  // $('.btn-warning').click(function(event) {
  //   $('#car1').css('margin-left', '50px');
  //   $('#car2').css('margin-left', '50px');
  //   ableMove = true;
  // });

  $('.btn-success').click(function(event) {
    $('#car1').css('margin-left', '50px');
    $('#car2').css('margin-left', '50px');
    $('#score1').empty();
    $('#score1').append(0);
    $('#score2').empty();
    $('#score2').append(0);
    ableMove = true;
  });

  //if(car1left === ){

  //}

})


$(document).ready(function() {
  console.log("js works!");

  $(document).keypress(function(event) {
    //if(event.which === 39){
      $('#car1').css('margin-left', '+=30px');
      console.log($('#car1').css('margin-left'));
    //};
  });

  // $(document).keypress(function() {
  //   $('#car2').css('margin-left', '+=30px');
  //   console.log($('#car2').css('margin-left'))
  // });


})

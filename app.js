var centerX, centerY;
var startx = -67;
var starty = -2;
var jumpx = -310;
var jumpy = -207.6;

$(document).ready(function(){


  for(var i = 0; i < 20; i++) {
    var face = $("<div class='face'/>");
    $("body").append(face);
  }

  $("body").on("mousedown",".face", function(){
    var y = starty + 3 * jumpy;
    var x = startx;
    $(this).css("background-position",x+"px "+y+"px");
  });

  $("body").on("mouseup",".face", function(){
    var y = starty  + jumpy;
    var x = startx + jumpx;
    $(this).css("background-position",x+"px "+y+"px");
  });


  $(window).on("mousemove",function(e){

    $(".face").each(function(){

      var facePos = $(this).position();
      // console.log(facePos);

      var deltaX = facePos.left + 75 - e.pageX;
      var deltaY = facePos.top + 75 - e.pageY;

      var rad = Math.atan2(deltaX, deltaY);
      var angle = rad * (180 / Math.PI);


      var x = startx;
      var y = starty;


      var direction;
      if(angle < 22.5 && angle > -22.5) {
        x = x + jumpx;
      }

      if(angle < -22.5 && angle > -67.5) {
        x = x + (2*jumpx);
      }

      if(angle < -67.5 && angle > -112.5) {
        x = x + (2*jumpx);
        y = y + (jumpy);
      }
      if(angle < -112.5 && angle > -157.5) {
        x = x + (2*jumpx);
        y = y + (2*jumpy);

      }
      if((angle < -157.5 && angle > -180) ||  (angle < 180 && angle > 157.5)) {
        x = x + (jumpx);
        y = y + (2*jumpy);

      }


      if(angle > 22.5 && angle  < 67.5) {
        x = x;
        y = y;

      }

      if(angle > 67.5 && angle < 112.5) {
        x = x;
        y = y + jumpy;
      }

      if(angle > 112.5 && angle < 157.5) {
        x = x;
        y = y + (2* jumpy);

      }

      var totalDelta = Math.sqrt(Math.pow(deltaX,2) + Math.pow(deltaY,2));
      if(totalDelta < 75) {
        x = startx + jumpx;
        y = starty + jumpy;
      }



      $(this).css("background-position",x+"px "+y+"px");
      // $(this).attr("direction",direction);

    });




  });



});

function updateFace() {

}




$(document).ready(function()
{
    $("#toggle").click(function() {
        $(".social-links2 ul").slideToggle("slow");
        
    });
});
$(document).ready(function(){
    $(".social-links2 ul").click(function(){
      $(".social-links2 ul ").slideUp("slow");
    });
  });
$(document).ready(function(){
    $("#b1").click(function(){
      $("#p1").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#b2").click(function(){
      $("#p2").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#b3").click(function(){
      $("#p3").slideToggle("slow");
    });
  });
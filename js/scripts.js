$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();

    const nameInput = $("input#name").val();

    const q1Input=parseInt($("#q1").val());
    const q2Input=parseInt($("#q2").val());
    const q3Input=parseInt($("#q3").val());
    const q4Input=parseInt($("#q4").val());
    const q5Input=parseInt($("#q5").val());

    const final=q1Input+q2Input+q3Input+q4Input+q5Input

    if (final <=5) {
      $("#resultRuby").show();
    } else if (final <=10){
      $("#resultJavaScript").show();
    } else 
      $("#resultC").show();

    $(".name").text(nameInput);

  });
});
$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();

    const qOneInput=parseInt($("#q1").val());
    const qTwoInput=parseInt($("#q2").val());
    const qThreeInput=parseInt($("#q3").val());
    const qFourInput=parseInt($("#q4").val());
    const qFiveInput=parseInt($("#q5").val());

    $("#q1").text(qOneInput);
    $("#q2").text(qTwoInput);
    $("#q3").text(qThreeInput);
    $("#q4").text(qFourInput);
    $("#q5").text(qFiveInput);

    let final=qOneInput+qTwoInput+qThreeInput+qFourInput+qFiveInput
    if (final <=5) {
      $("#resultRuby").show();
    } else if (final <=10){
      $("#resultJavaScript").show();
    } else 
      $("#resultC").show();
  });
});
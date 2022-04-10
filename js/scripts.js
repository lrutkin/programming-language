$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();

    const qOneInput = parseInt($("input:radio[name=q1]:checked").val());
    const qTwoInput = parseInt($("input:radio[name=q2]:checked").val());
    const qThreeInput = parseInt($("input:radio[name=q3]:checked").val());
    const qFourInput = parseInt($("input:radio[name=q4]:checked").val());
    const qFiveInput = parseInt($("input:radio[name=q5]:checked").val());

    $("#q1").text(qOneInput);
    $("#q2").text(qTwoInput);
    $("#q3").text(qThreeInput);
    $("#q4").text(qFourInput);
    $("#q5").text(qFiveInput);

    const finalResult=qOneInput+qTwoInput+qThreeInput+qFourInput+qFiveInput
    if (finalResult <=5) {
      $("#resultRuby").show();
    } else if (finalResult <=10){
      $("#resultJavaScript").show();
    } else 
      $("#resultC").show();

  });
});
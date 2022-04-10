$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();

    const qOneInput=parseInt($("#q1").val());
    const qTwoInput=parseInt($("#q2").val());
    const qThreeInput=parseInt($("#q3").val());
    const qFourInput=parseInt($("#q4").val());
    const qFiveInput=parseInt($("#q5").val());

    const final=qOneInput+qTwoInput+qThreeInput+qFourInput+qFiveInput
    if (final <=5) {
      alert("You should study Ruby!");
    } else if (final <=10){
      alert("You should study JavaScript!")
    } else 
      alert("You should study C#!")

  });
});
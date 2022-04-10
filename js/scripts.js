$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();

    const nameInput = $("input#name").val();
    const rubyResult = "Ruby";
    const javaScriptResult = "JavaScript";
    const pythonResult = "Python";

    const q1Input=parseInt($("#q1").val());
    const q2Input=parseInt($("#q2").val());
    const q3Input=parseInt($("#q3").val());
    const q4Input=parseInt($("#q4").val());
    const q5Input=parseInt($("#q5").val());

    const final=q1Input+q2Input+q3Input+q4Input+q5Input

    if (final <=5) {
      $(".result").text(rubyResult);
    } else if (final <=10){
      $(".result").text(javaScriptResult);
    } else 
      $(".result").text(pythonResult);

    $(".name").text(nameInput);

    $("#resultLanguage").show();

  });
});
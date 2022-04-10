$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();

    const nameInput = $("input#name").val(); 
    const rubyResult = "Ruby, not to be confused with the gem";
    const javaScriptResult = "JavaScript, the same language that powers this quiz";
    const pythonResult = "Python, which is more than just a large snake";
    const cResult = "C#, a programming language and a musical note"

    const q1Input=parseInt($("#q1").val());
    const q2Input=parseInt($("#q2").val());
    const q3Input=parseInt($("#q3").val());
    const q4Input=parseInt($("#q4").val());
    const q5Input=parseInt($("#q5").val());

    const final=q1Input+q2Input+q3Input+q4Input+q5Input

    if (final <=7) {
      $(".result").text(rubyResult);
    } else if (final <=13){
      $(".result").text(javaScriptResult);
    } else if (final <=18){
      $(".result").text(pythonResult);
    } else 
      $(".result").text(cResult);

    $(".name").text(nameInput);

    $("#resultLanguage").show(); 

  });
});
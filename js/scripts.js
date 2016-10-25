var newSentence, sentence;
var reverse = function()  {
  newSentence = sentence.split("");
  newSentence = newSentence.reverse();
  newSentence = newSentence.join("").toLowerCase();
}
var calculate = function() {

  if (sentence === newSentence) {
    alert("Is a palindrome");
  }
  else {
    alert("Not a palindrome");
  };
};
$(document).ready(function()  {
  $("form#palindrome").submit(function(event) {
    sentence = $("#textbox").val().toLowerCase();
    reverse();
    calculate();
    event.preventDefault();
  });
});

function processRawSentence(rawSentence){
  var words = rawSentence.split(".").join(" ").split(" ");
  
  return words.filter(x => x.length >= 3).reverse().join(" ");
}


$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var rawSentence = $("#sentence").val();
    var newSentence = processRawSentence(rawSentence);
    $("div p").text(newSentence + ".");
  });
})
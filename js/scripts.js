function processRawSentence(rawSentence){
  var words = rawSentence.split(" ");
  return words.filter(x = x.length >=3).reverse().join(" ");
}


$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var rawSentence = $("#sentence").val();
    $("div p").text(rawSentence);
  });
})
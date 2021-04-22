function countWord() {
        // Get the input text value
        var wordsValue = document
            .getElementById("word").value;
  
        // Initialize the word counter
        var wordCounter = 0;
  
        // Split the words on each
        // space character 
         var split = wordsValue.split(' ');
  
         // Loop through the words and 
         // increase the counter when 
         // each split word is not empty
         for (var i = 0; i < split.length; i++) {
             if (split[i] != "") {
                  wordCounter += 1;
              }
          }
  
          // Display it as output
          document.getElementById("result")
                .innerHTML = wordCounter;
        }

function charcountupdate(str) {
  var lng = str.length;
  document.getElementById("charcount").innerHTML = lng + ' characters';
}

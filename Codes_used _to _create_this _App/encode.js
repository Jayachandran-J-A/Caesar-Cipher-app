document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('encodeBtn').addEventListener('click', encode);
});

function encode() {
  var inputText = document.getElementById('inputText').value;
  var shiftAmount = parseInt(document.getElementById('shiftAmount').value);
  var result = caesarCipher(inputText, shiftAmount);
  document.getElementById('outputText').value = result;
}

function caesarCipher(text, shift) {
  return text.split('').map(function(char) {
    if (char.match(/[a-zA-Z]/)) {
      var code = char.charCodeAt(0);
      var base = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      return String.fromCharCode((code - base + shift + 26) % 26 + base);
    }
    return char;
  }).join('');
}

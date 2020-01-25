function fn (str) {
  const arr = str.match(/\d{11}/g)
  if (arr) {
    return arr.join(';')
  }
} 

var btn = document.getElementById('btn');
var txt = document.getElementById('txt');

var output = document.getElementById('output');
btn.addEventListener('click', function () {
  var val = txt.value;
  output.value = fn(val);
})
var otxt = document.getElementById('text');
var after = document.getElementById('after');
var inputContainer = document.querySelector('.inputContainer');
document.getElementById('newBtn').addEventListener('click', function () {
    var input = document.createElement('input');
    input.setAttribute('class', 'input');
    inputContainer.appendChild(input);
})
document.getElementById('btn').onclick = function () {
    var inputs = document.querySelectorAll('.inputContainer .input');
    var str = otxt.value;
    Array.prototype.slice.call(inputs).forEach(function (item) {
    var reg = new RegExp(item.value, 'g');
    str = str.replace(reg, '');
    })
    after.value = str
}
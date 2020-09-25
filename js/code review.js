var input = document.getElementsByTagName('input');

var result = document.getElementById('result');
var select = document.getElementById('select');

function calculateInsurance() {
    var horsePower = input[2].value;
    var age = input[1].value;
    var name = input[0].value;
    if (select.value == "Austria") {
        result.innerHTML = name + ", your insurance costs " + Math.round((horsePower * 100 / age + 50)) + " eur";
    }
    else if (select.value == "Hungary") {
        result.innerHTML = name + ", your insurance costs " + Math.round((horsePower * 120 / age + 50)) + " eur";
    }
    else {
        result.innerHTML = name + ", your insurance costs " + Math.round((horsePower * 150 / (age + 3) + 50)) + " eur";
    }
}

document.getElementById('btn').addEventListener('click', calculateInsurance, false);
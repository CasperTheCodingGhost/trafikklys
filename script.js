function switchToRed() {
    blankAll()
    document.getElementById('red').style.backgroundColor = "red"
}


function switchToRednYellow() {
    blankAll()
    document.getElementById('red').style.backgroundColor = "red"
    document.getElementById('gul').style.backgroundColor = "orange"
}


function switchToGreen() {
    blankAll()
    document.getElementById('grenn').style.backgroundColor = "green"
}

function blankAll() {
    document.getElementById('red').style.backgroundColor = '';
    document.getElementById('gul').style.backgroundColor = '';
    document.getElementById('grenn').style.backgroundColor = '';
}

let interval
function active(){
    interval = setInterval(activelights, 3000);
    setTimeout(stopInterval, 6969);
}
function stopInterval(){
    clearInterval(interval)
}
function activelights(){
    setTimeout(switchToRed, 500);
    setTimeout(switchToRednYellow, 1500);
    setTimeout(switchToGreen, 2500);
}
function forclear(){
    document.getElementById("hasil").innerHTML="0";
}
function hapusNol() {
    var value = document.getElementById("hasil").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("hasil").innerHTML = value;
    }
}
function persen() {
    hapusNol();
    var value = document.getElementById("hasil").innerHTML;
    value = value / 100;
    document.getElementById("hasil").innerHTML = value;
}
function fordisplay(value) {
    hapusNol();
    document.getElementById("hasil").innerHTML += value;
}

function samadengan(){
    hapusNol();
    var persamaan = document.getElementById("hasil").innerHTML;
    var solved = eval(persamaan);
    document.getElementById("hasil").innerHTML=solved;
}
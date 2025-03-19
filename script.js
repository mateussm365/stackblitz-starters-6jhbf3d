function changeText(){
    var x = document.getElementsByTagName("h1");
    x[0].innerHTML = "Olá!";

}
window.changeText = changeText;
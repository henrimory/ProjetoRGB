function geraCor(){
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    let cor = "RGB("+red+","+green+","+blue+")";

    document.getElementById("code").style.color = cor;
    //document.getElementById("code").innerHTML = cor;

    document.getElementById("cor").style.background = cor;

    document.getElementById("txtRed").value = red;
    document.getElementById("txtGreen").value = green;
    document.getElementById("txtBlue").value = blue;
    

    setTimeout("geraCor()",10);

}
window.onload = function () {
    let button1 = document.querySelector("button:nth-child(1)");
    button1.onclick = function () {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "goldenrod";
    };

    let button2 = document.querySelector("button:nth-child(2)");
    button2.onclick = function () {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "gray";
    };

    let button3 = document.querySelector("button:nth-child(3)");
    button3.onclick = function () {
        document.querySelector("section").style.fontSize = "50px";
    };

    let button4 = document.querySelector("button:nth-child(4)");
    button4.onclick = function () {
        document.querySelector("section").style.fontSize = "20px";
    };
};
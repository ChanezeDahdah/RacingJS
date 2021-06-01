    var Click = 0;
    var Count = document.querySelector("footer > div");

    Count.onclick = function compteur(){
        Count.innerHTML = Click++;
    };
window.onload = function(){
    let background = document.getElementsByTagName("canvas")[0];
    let draw = background.getContext("2d");
    let button = document.getElementsByTagName("button");
    let song = new Audio("triangle.ogg");

    draw.lineWidth=1;
    draw.beginPath();
    draw.moveTo(6,6);
    draw.lineTo(14,10);
    draw.lineTo(6,14);
    draw.fillStyle = "#ffffff";
    draw.fill();
    //draw.stroke();

    background.onclick = function(){
        song.play();
    };

    button[0].onclick = function(){
        song.pause();
    };

    button[1].onclick = function(){
        song.pause();
        song.currentTime = 0;
    };

    button[2].onclick = function(){
        if(song.muted != true)
        {
            song.muted = true;
        }
        else
        {
            song.muted = false;
        }
    }
};
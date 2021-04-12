const click = document.getElementById("btn").onclick = golfScore;

function golfScore(par, strokes){
    par = Math.floor(Math.random()*10);
    document.getElementById("par").innerHTML = par;
    strokes = Math.floor(Math.random()*10);
    document.getElementById("strokes").innerHTML = strokes;

    return (strokes == 1)? document.getElementById("res").innerText = "Hole-in-one!":
    (strokes <= par -2)? document.getElementById("res").innerText = "Eagle":
    (strokes == par -1)? document.getElementById("res").innerText = "Birdie":
    (strokes == 0|| par == 0)? document.getElementById("res").innerText = " ":
    (strokes == par)? document.getElementById("res").innerText = "Par":
    (strokes == par +1)? document.getElementById("res").innerText = "Bogey":
    (strokes == par +2)? document.getElementById("res").innerText = "Double Bogey":
    document.getElementById("res").innerText = "Go Home!";
}

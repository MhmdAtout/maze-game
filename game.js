window.onload = function{

    var status = document.getElementById('status');
    var map = document.getElementById('game');
    var score = document.getElementById('score');
    var start = document.getElementById('start');
    var walls = document.querySelectorAll('.boundary');
    var end = document.getElementById('end');

    var rule = {
        gameRunning: false,
        inGame: false,
        scoreCounter: 0,
    }

    score.innerText = rule.scoreCounter;

    map.addEventListener('mouseenter', function(){
        rule.inGame = true;
    })
    map.addEventListener('mouseleave', function(){
        rule.inGame = false;
    })

    start.addEventListener('click', function(){
        rule.scoreCounter = 0;
        score.innerText = rule.scoreCounter;
    })

    start.addEventListener('mouseover', function(){
        status.innerText = "Game Started :)";
        rule.gameRunning = true;
    });

}
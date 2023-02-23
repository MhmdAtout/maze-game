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

    end.addEventListener('mouseover', function(){
        if (rule.inGame){
            if(rule.gameRunning){
                status.innerText = "You Won :)";
                score.innerText = rule.scoreCounter += 5;
                rule.gameRunning = false;
            } else {
                status.innerHTML = "Please go to the start point";
            }
        }else{
            if(rule.gameRunning){
                status.innerText = "Cought you cheating";
                rule.gameRunning = false;
                score.innerText = rule.scoreCounter -= 10;
            }
        }
    });

}
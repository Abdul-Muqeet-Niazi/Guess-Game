let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = document.querySelector('.scoreNumber').textContent = 20;
let highScore = document.querySelector('.highScoreNumber').textContent = 0;

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.scoreNumber').textContent = score;
    document.querySelector('.highScoreNumber').textContent = 0
    document.querySelector('.numberGuessing').textContent = `Start Guessing...`
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector('.secretNumber').textContent = '?';
    document.body.style.backgroundColor = '#242323';
})

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".Number").value);
  console.log(guess);

  if(!guess) {
    document.querySelector('.numberGuessing').textContent = `Please enter the number!`
    score--;
    document.querySelector('.scoreNumber').textContent = score;
  } else if (secretNumber === guess) {
    document.querySelector('.numberGuessing').textContent = `You guess the right number !`
    document.querySelector('.scoreNumber').textContent = `You won the game !`
    document.body.style.backgroundColor = '#2a7026'
    document.querySelector('.highScoreNumber').textContent = score;
    document.querySelector('.secretNumber').textContent = secretNumber;
  }else if (guess > secretNumber) {
    document.querySelector('.numberGuessing').textContent = `Too High !`
    if (score < 1) {
        document.querySelector('.numberGuessing').textContent = `Game Over`
        document.querySelector('.scoreNumber').textContent = `Game Over`
    }
    score--;
    document.querySelector('.scoreNumber').textContent = score;
  }else if (guess < secretNumber) {
    document.querySelector('.numberGuessing').textContent = `Too Low !`
    score--;
    document.querySelector('.scoreNumber').textContent = score;
    if (score < 1 ) {
        document.querySelector('.numberGuessing').textContent = `Game Over`
        document.querySelector('.scoreNumber').textContent = `Game Over`
    }
  }

});


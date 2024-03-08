function rollDice() {
  var randomDice = Math.floor(Math.random() * 6) + 1;

  var randomImgSource = 'img/dice' + randomDice + '.png';

  var randomImg = document.querySelectorAll('img')[0];
  randomImg.setAttribute('src', randomImgSource);

  //----------------------------------------------------------
  var randomDice2 = Math.floor(Math.random() * 6) + 1;

  var randomImgSource2 = 'img/dice' + randomDice2 + '.png';

  var randomImg2 = document.querySelectorAll('img')[1];
  randomImg2.setAttribute('src', randomImgSource2);

  //----------------------------------------------------------
 if (randomDice > randomDice2) {
    document.querySelector('.title').innerHTML = 'Player 1 won 🚩';
    document.querySelector('.p1').style.color = 'green';
    document.querySelector('.p2').style.color = 'red';
  } else if (randomDice < randomDice2) {
    document.querySelector('.title').innerHTML = 'Player 2 won 🚩';
    document.querySelector('.p2').style.color = 'green';
    document.querySelector('.p1').style.color = 'red';
  } else {
    document.querySelector('.title').innerHTML = 'Draw!!!';
    document.querySelector('.p1').style.color = 'white';
    document.querySelector('.p2').style.color = 'white';
  }
   setTimeout(function () {
    buttonPlay.classList.remove('btn-info');
  }, 50);
}

//BUTTON-----------------------------------------
var buttonPlay = document.getElementById('btn');
console.log(buttonPlay);

buttonPlay.addEventListener('click', rollDice);

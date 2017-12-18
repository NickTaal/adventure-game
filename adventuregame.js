var button_1 = document.getElementById('button_1')
var button_2 = document.getElementById('button_2')
var button_3 = document.getElementById('button_3')
var title = document.getElementById('option1')
var intro = document.getElementById('story')
var body = document.getElementById('body')
var item1 = document.getElementById('item1')
document.getElementById('button_2').style.display = "none";
document.getElementById('button_3').style.display = "none";

document.getElementById('button_1').onclick = startlevel;
document.getElementById('button_1').innerHTML = "start";
document.getElementById('body') = "url(img/afbeelding1.jpg) no-repeat center center";


function startlevel() {
  title.innerhthml = "Je staat op het punt een heist te doen, kies je dingen";
  document.getElementById('button_2').innerHTML = "Lichte armor"
  document.getElementById('button_3').innerHTML = "Zwaardere armor"
  document.getElementById('button_2').style.display = "inline"
  document.getElementById('button_3').style.display = "inline"
  document.getElementById('body') = "url(img/oranje.png) no-repeat center center";
  document.body.style.color = black;
  document.getElementById('button_2').onclick = level1;
  document.getElementById('button_3').onclick = level2;
  document.getElementById('button_1').style.display = none;
  }

function level1() {
  title.style.display = none

  document.body.style.background = "url(img/blauw.png) no-repeat center center";
  button_1.style.display = none;
  button_2.innerHTML = "pistool(stealth)"
  button_3.innerHTML  = "Geweer(offensive)"

}


function start(){

  changeImages();
  startTime();
}

function startTime(){
  var currTime = new Date();
  var hours = currTime.getHours();
  var minutes = currTime.getMinutes();
  var seconds = currTime.getSeconds();
  hours = setDigits(hours);
  minutes = setDigits(minutes);
  seconds = setDigits(seconds);
  document.getElementById('time').innerHTML = hours+":"+minutes+":"+seconds;

  setTimeout(startTime,500);
  return currTime;
}

function setDigits(i){
  if(i < 10) {i = "0" + i};
  return i;
}

function changeImages() {
  var w = document.getElementById('wake_up');
  var w_selected = w.options[w.selectedIndex].value;
  var l = document.getElementById('lunch');
  var l_selected = l.options[l.selectedIndex].value;
  var n = document.getElementById('nap');
  var n_selected = n.options[n.selectedIndex].value;

  var currTime = new Date();
  var hours = currTime.getHours();

  if(hours == "0")
    hours = "24";

  if(hours == w_selected){
    document.getElementById('image').src="images/morning_cat.jpeg";
  }else{
    if(hours == l_selected){
      document.getElementById('image').src="images/lunch_kitteh.jpeg";
    }else{
      if(hours == n_selected){
        document.getElementById('image').src="images/sleeping_cat.jpg";
      }
    }
  }
}

function shuffleImages(){

  var rand = Math.floor(Math.random() * 7);

  switch(rand){
    case 1:   document.getElementById('image').src = "images/solar_recharge.jpeg";
      break;
    case 2:   document.getElementById('image').src = "images/mallow.jpeg";
      break;
    case 3:   document.getElementById('image').src = "images/fits.jpg";
      break;
    case 4:   document.getElementById('image').src = "images/hug.jpg";
      break;
    case 5:   document.getElementById('image').src = "images/lasagna.jpg";
      break;
    case 6:   document.getElementById('image').src = "images/muffincat.jpg";
      break;
    default: document.getElementById('image').src = "images/solar_recharge.jpeg";
  }

}

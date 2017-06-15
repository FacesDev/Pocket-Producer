function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
  console.log("e: ", e);
}
function playSound(e) {
  const audio = document.querySelector(`audio[data-sound="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
console.log("keys: ", keys);


// ------------------------Animation--------------------------------
document.body.addEventListener("keyup", danceMonkey);
var numberOfTimesRun = 0;
function danceMonkey() {



    if (numberOfTimesRun === 0) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_001.jpg";
      numberOfTimesRun += 1;
      console.log("one");
      console.log(numberOfTimesRun);
    }
    else if (numberOfTimesRun === 1) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_002.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 2) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_003.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 3) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_004.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 4) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_005.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 5) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_006.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 6) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_007.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 7) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_008.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 8) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_009.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 9) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_010.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 10) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_011.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 11) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_012.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 12) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_013.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 13) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_014.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 14) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_015.jpg";
      numberOfTimesRun += 1;
      console.log("frame: ", numberOfTimesRun);
    }
    else if (numberOfTimesRun === 15) {
       document.getElementById("danceImageOverlay").src = "./danceimg/image_part_016.jpg";
      numberOfTimesRun = 0;
      console.log("frame: ", numberOfTimesRun);
    }



  }

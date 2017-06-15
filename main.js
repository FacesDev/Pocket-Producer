// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   e.target.classList.remove('playing');
//   console.log("e: ", e);
// }
// function playSound(e) {
//   const audio = document.querySelector(`audio[data-sound="${e.keyCode}"]`);
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//   key.classList.add('playing');
//   audio.currentTime = 0;
//   audio.play();
// }
// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);
// console.log("keys: ", keys);
//




//
// document.getElementById("danceImageOverlay").src = "./danceimg/image_part_001.jpg";

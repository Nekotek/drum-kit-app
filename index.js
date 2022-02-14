// Button pressed detector
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    audioPlayer(this.innerHTML);
    animation(this.innerHTML);
  })
}
// Keyboard pressed detector
document.addEventListener("keydown", function(event) {
  audioPlayer(event.key);
  animation(event.key);
})
// Plays corresponding audio to the button pressed
function audioPlayer(keyPressed) {
  switch (keyPressed) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("Wat");
      break;
  }
}
// Animations
function animation(keyPressed) {
   document.querySelector("."+keyPressed).classList.add("pressed");
   setTimeout(function() {
    document.querySelector("."+keyPressed).classList.remove("pressed");
  }, 100);

 }

var audioPlayer = new Audio(); // Shared audio object
var NumberOfButton = document.querySelectorAll(".btn").length;

for (var i = 0; i < NumberOfButton; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    // Pause any current sound
    audioPlayer.pause();
    audioPlayer.currentTime = 0;

    // Set new sound based on button
    switch (buttonInnerHTML) {
      case "h":
        audioPlayer.src = "sounds/lively.mp3";
        break;
      case "s":
        audioPlayer.src = "sounds/sad.mp3";
        break;
      case "n":
        audioPlayer.src = "sounds/Nostalgic.mp3";
        break;
      case "r":
        audioPlayer.src = "sounds/relax.mp3";
        break;
      case "i":
        audioPlayer.src = "sounds/comback.mp3";
        break;
      default:
        audioPlayer.src = " not available";
    }

    // Play the selected sound
    if (audioPlayer.src) {
      audioPlayer.play();
    }
  });
}
//  Stop button 
let stopButtons = document.getElementsByClassName("stop");

for (let i = 0; i < stopButtons.length; i++) {
  stopButtons[i].addEventListener("click", function () {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  });
}














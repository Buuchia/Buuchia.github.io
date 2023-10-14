/* find the modal */
let modal = document.getElementById("modalDialog");
/* find the button and add an eventlister */
let showModalButton = document.getElementById("showModal");
showModalButton.addEventListener("click", () => {
  modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});

modal.showModal();

// PLAY/PAUSE BUTTON
/* I add in the audio play/pause feature because it contributes to the context of the
original poem, letting the user know where the poem takes place. */
/* Affordance: I want the sound button to toggle between pause and play, because depends on the viewers, 
some may find the audio accompanying the experience, some may want to turn it off to focus on
reading the poem content.*/
// Signifiers: I want to click on the button
// Feedbacks: I want the icons to change 

//reference the audio element and sound play/pause button
let audioElement = document.getElementById("audioElement");
let playButton = document.getElementById("playButton");

function playPause(){
  console.log(0);
  if (audioElement.paused || audioElement.ended) { //if this is true
    // if audio isn't already playing, make it play
    audioElement.play();
    // then the icon on the button changes to sound on 
    playButton.style.backgroundImage = "url('./icons/speaker-on/icons8-speaker-48.png')";
    // with title indicates the next stage it is switched to if you click it, which is sound off
    playButton.title = "Pause Sound";
  
  } else {
    // if it is already playing, make it pause
    audioElement.pause();
    // then the icon on the button changes to sound off 
    playButton.style.backgroundImage = "url('./icons/speaker-off/icons8-no-audio-48.png')";
     // with title indicates the next stage it is switched to if you click it, which is sound on
    playButton.title = "Play Sound";
  }
}
/*add event listener to run when mouse clicks button*/
  playButton.addEventListener('click', playPause);



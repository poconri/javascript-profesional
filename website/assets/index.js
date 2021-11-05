const  video = document.querySelector("video");
const  playButton = document.querySelector("#playPause");
const  muteButton = document.querySelector("#unmuteMute");
import { MediaPlayer } from './MediaPlayer.js';
import { AutoPlay } from './Plugins/AutoPlay.js';


const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay()]
});

playButton.onclick = () => player.play();
muteButton.onclick = () => player.unmuteMute();



import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './Plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()] });

const playButton = document.querySelector('#playButton');
playButton.onClick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onClick = () => {
  if (player.media.muted) {
    player.unmute();
    console.log('click');
  } else {
    player.mute();
    console.log('click');
  }
};
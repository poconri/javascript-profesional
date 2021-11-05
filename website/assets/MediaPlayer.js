import { AutoPlay } from './Plugins/AutoPlay.js';

function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
}

MediaPlayer.prototype.play = function() {
  this.media.paused ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
}

MediaPlayer.prototype.unmuteMute = function() {
  this.media.muted ? this.media.muted = false : this.media.muted = true;
};

MediaPlayer.prototype.AutoPlay = function() {
  this.media.muted = true;
  this.media.autoplay = true;
};

export { MediaPlayer };
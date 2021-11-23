class AutoPause {
 constructor() {
     this.threshold = 0.25;
     this.handleIntersection = this.handleIntersection.bind(this);
 }
 run(player) {
  this.player = player;
  const observer = new IntersectionObserver(this.handleIntersection, {
   threshold: this.threshold,
  });
    observer.observe(this.player.media);
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
 }
  handleIntersection(entries) {
   const entry = entries[0];

   const isVisible = entry.intersectionRatio >= this.threshold;
   
   if (!!isVisible) {
    this.player.media.play();
    } else {
    this.player.media.pause();
  }
 }
    handleVisibilityChange() {
        const isVisible = document.visibilityState === 'visible';
        if (isVisible) {
            this.player.media.play();
        } else {
            this.player.media.pause();
        }
    }
}

export { AutoPause };
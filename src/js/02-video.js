import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const timeStart = localStorage.getItem('videoplayer-current-time') ?? 0;
const player = new Player('vimeo-player', {
});

player    
  .setCurrentTime(Number(timeStart))
  .then(function (seconds) {
  console.log('Time start:', seconds);  // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
            console.log(error.name);
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('play', function () {
  console.log('played the video!');
});

player.on(
  'timeupdate',
  throttle(function (e) {
      localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
    console.log('Time reload: ', Number(timeStart));

});


import Player from '@vimeo/player';
import throttle from 'lodash.throttle/';
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');

const player = new Player('vimeo-player', {
  width: 640,
});
const timeStart = localStorage.getItem('videoplayer-current-time') ?? 0;

player
  .setCurrentTime(Number(timeStart))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('play', function () {
  console.log('played the video!');
});

const setCurrentItem = _.throttle(function (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    console.log(e.seconds);
}, 1000
);
player.on('timeupdate', setCurrentItem);
// player.on('timeupdate', function (e) {
//   localStorage.setItem('videoplayer-current-time', e.seconds);
// });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

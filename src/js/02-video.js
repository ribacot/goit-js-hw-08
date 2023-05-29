import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const timeStart = localStorage.getItem('videoplayer-current-time') ?? 0;
const player = new Player('vimeo-player');

player
  .setCurrentTime(Number(timeStart) - 5)

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
});

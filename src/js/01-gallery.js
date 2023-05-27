// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('afterbegin', murkup(galleryItems));
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.9,
  closeText: '&#10007;',
});
const decorTitleEl = document.querySelector(
  '.sl-wrapper .sl-image .sl-caption '
);
decorTitleEl.style.backgroundColor = 'rgb(107, 79, 133, 0.7)';

function murkup(gallery) {
  return gallery
    .map(
      ({
        preview,
        original,
        description,
      }) => `<li class="gallery__item gallery " >
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
    alt="${description}"
 
    />
  </a>
</li>`
    )
    .join('');
}


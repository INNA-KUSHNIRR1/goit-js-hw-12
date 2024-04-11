import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import getImagesFromApi from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const ref = {
  form: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
  btnLoadMore: document.querySelector('button[type="button"]'),
};

ref.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  ref.gallery.innerHTML = `<span class="loader"></span>`;

  const { text } = event.currentTarget.elements;

  getImagesFromApi(text.value.trim())
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          color: '#fc6e51',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topCenter',
        });
      }

      ref.gallery.innerHTML = createMarkup(data.hits);
      ref.btnLoadMore.classList.remove('is-active');

      //   ref.gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      //   page += 1;
      //   if (page > 1) {
      //     ref.btn.textContent=;
      //   }
      lightbox.refresh();
      ref.form.reset();
    })
    .catch(error => {
      alert(error);
    });
}

const lightbox = new SimpleLightbox('.card a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
});

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import getImagesFromApi from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const ref = {
  form: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
  btnLoadMore: document.querySelector('.btn-load-more'),
  loader: document.querySelector('.loader'),
  card: document.querySelector('.card'),
};
let textForm;
let page = 1;
let perPage = 15;

ref.form.addEventListener('submit', onSubmitForm);
ref.btnLoadMore.addEventListener('click', onClickLoadMore);

async function onSubmitForm(event) {
  event.preventDefault();
  const { text } = event.currentTarget.elements;
  textForm = text.value.trim();
  if (textForm === '') {
    return iziToast.warning({
      color: '#fc6e51',
      message: 'Field is empty!',
      position: 'topCenter',
    });
  }
  ref.gallery.innerHTML = '';
  try {
    const { hits } = await getImagesFromApi(textForm, (page = 29), perPage);
    if (hits.length === 0) {
      iziToast.warning({
        color: '#fc6e51',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
      hideBtnAndLoader();
      return;
    }
    showLoader();
    ref.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
    hideLoader();

    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      color: 'red',
      message: `${error}`,
      position: 'topCenter',
    });
  } finally {
    ref.form.reset();
  }
}

async function onClickLoadMore(event) {
  page += 1;
  showLoader();

  try {
    const { hits, totalHits } = await getImagesFromApi(textForm, page, perPage);
    const endPage = Math.ceil(totalHits / perPage);

    if (endPage === page) {
      iziToast.warning({
        color: '#fc6e51',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topCenter',
      });
      hideBtnAndLoader();
      return;
    }
    ref.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
    hideLoader();
    let rect = ref.card.getBoundingClientRect();

    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      color: 'red',
      message: `${error}`,
      position: 'topCenter',
    });
  } finally {
    ref.form.reset();
  }
}
const lightbox = new SimpleLightbox('.card a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
});

// function showBtnLodeMore() {
//   ref.btnLoadMore.classList.remove('is-active');
// }
// function hideBtnLoadMore() {
//   ref.btnLoadMore.classList.add('is-active');
// }
function showLoader() {
  ref.loader.classList.remove('is-active');
  ref.btnLoadMore.classList.add('is-active');
}
function hideLoader() {
  ref.loader.classList.add('is-active');
  ref.btnLoadMore.classList.remove('is-active');
}

function hideBtnAndLoader() {
  ref.btnLoadMore.classList.add('is-active');
  ref.loader.classList.add('is-active');
}

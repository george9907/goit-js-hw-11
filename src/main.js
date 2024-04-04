import { pixabayPhoto } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';
import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.search-form');
export const inputSearch = form.elements.search;
export const listOfPhotos = document.querySelector('.gallery');
export const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
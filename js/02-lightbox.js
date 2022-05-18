import { galleryItems } from './gallery-items.js'
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = makeItemGalleryMarkup(galleryItems)

galleryContainer.innerHTML = galleryMarkup

function makeItemGalleryMarkup(listOfImages) {
   return listOfImages
      .map(({ preview, original, description }) => {
         return `
            <a class="gallery__item" href=${original}>
               <img class="gallery__image" src=${preview} alt=${description} />
            </a>
            `
      })
      .join('')
}

const lightbox = new SimpleLightbox('.gallery a', {
   docClose: true,
   captionsData: 'alt',
   captionPosition: 'bottom',
   captionDelay: 250,
})

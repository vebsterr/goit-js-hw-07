import { galleryItems } from './gallery-items.js'

// Change code below this line
const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = makeItemGalleryMarkup(galleryItems)
let instance = null

galleryContainer.innerHTML = galleryMarkup

galleryContainer.addEventListener('click', onClickImages)

function makeItemGalleryMarkup(listOfImages) {
   return listOfImages
      .map(({ preview, original, description }) => {
         return `<div class="gallery__item">
         <a class="gallery__link" href=${original}>
            <img
               class="gallery__image"
               src=${preview}
               data-source=${original}
               alt=${description}
            />
         </a>
      </div>`
      })
      .join('')
}

function onClickImages(event) {
   const isImgEl = event.target.classList.contains('gallery__image')

   if (!isImgEl) {
      return
   }

   event.preventDefault()

   galleryContainer.addEventListener('keydown', onEscModal)

   const linkToOriginalSize = event.target.dataset.source

   instance = basicLightbox.create(
      `
   <img src="${linkToOriginalSize}" alt="${event.target.alt}">
   `
   )

   instance.show()
}

function onEscModal(event) {
   event.preventDefault()
   if (event.code === 'Escape') {
      instance.close()
      galleryContainer.removeEventListener('keydown', onEscModal)
   }
}

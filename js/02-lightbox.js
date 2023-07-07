import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createGalleryItem(items) {
  return items
    .map(
      (item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`
    )
    .join("");
}

const galleryItemsEl = createGalleryItem(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryItemsEl);

galleryEl.addEventListener("click", openImage);

function openImage(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    var lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
      captionType: "alt",
    });

    galleryEl.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  }
}


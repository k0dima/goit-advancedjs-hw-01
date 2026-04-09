import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItems = [
  {
    largeImg: './img/gallery/large/1.jpg',
    smallImg: './img/gallery/small/1.jpg',
    alt: 'Team brainstorming and planning with sticky notes',
  },
  {
    largeImg: './img/gallery/large/1-1.jpg',
    smallImg: './img/gallery/small/1-1.jpg',
    alt: 'Modern meeting room with workspace setup',
  },
  {
    largeImg: './img/gallery/large/1-2.jpg',
    smallImg: './img/gallery/small/1-2.jpg',
    alt: 'Laptop workspace with coffee and accessories',
  },

  {
    largeImg: './img/gallery/large/2.jpg',
    smallImg: './img/gallery/small/2.jpg',
    alt: 'Creative idea represented by a glowing light bulb',
  },
  {
    largeImg: './img/gallery/large/2-1.jpg',
    smallImg: './img/gallery/small/2-1.jpg',
    alt: 'Colorful creative office interior',
  },
  {
    largeImg: './img/gallery/large/2-2.jpg',
    smallImg: './img/gallery/small/2-2.jpg',
    alt: 'Person working on laptop',
  },

  {
    largeImg: './img/gallery/large/3.jpg',
    smallImg: './img/gallery/small/3.jpg',
    alt: 'Workspace — team planning session',
  },
  {
    largeImg: './img/gallery/large/3-1.jpg',
    smallImg: './img/gallery/small/3-1.jpg',
    alt: 'Workspace — modern meeting room',
  },
  {
    largeImg: './img/gallery/large/3-2.jpg',
    smallImg: './img/gallery/small/3-2.jpg',
    alt: 'Workspace — laptop desk setup',
  },
];

const markupItem = ({ largeImg, smallImg, alt }) => `
<li class="gallery-item">
	<a class="gallery-link" href="${largeImg}">
		<img
			class="gallery-image"
			src="${smallImg}"
			alt="${alt}"
			/>
	</a>
</li>
`;

const markupList = galleryItems.map(markupItem).join('');

const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('beforeend', markupList);

const main = document.querySelector('.container h1');

main.after(galleryList);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

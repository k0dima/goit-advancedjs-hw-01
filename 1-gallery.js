import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as r}from"./assets/vendor-CgTBfC_f.js";const m=[{largeImg:"./img/gallery/large/1.jpg",smallImg:"./img/gallery/small/1.jpg",alt:"Team brainstorming and planning with sticky notes"},{largeImg:"./img/gallery/large/1-1.jpg",smallImg:"./img/gallery/small/1-1.jpg",alt:"Modern meeting room with workspace setup"},{largeImg:"./img/gallery/large/1-2.jpg",smallImg:"./img/gallery/small/1-2.jpg",alt:"Laptop workspace with coffee and accessories"},{largeImg:"./img/gallery/large/2.jpg",smallImg:"./img/gallery/small/2.jpg",alt:"Creative idea represented by a glowing light bulb"},{largeImg:"./img/gallery/large/2-1.jpg",smallImg:"./img/gallery/small/2-1.jpg",alt:"Colorful creative office interior"},{largeImg:"./img/gallery/large/2-2.jpg",smallImg:"./img/gallery/small/2-2.jpg",alt:"Person working on laptop"},{largeImg:"./img/gallery/large/3.jpg",smallImg:"./img/gallery/small/3.jpg",alt:"Workspace — team planning session"},{largeImg:"./img/gallery/large/3-1.jpg",smallImg:"./img/gallery/small/3-1.jpg",alt:"Workspace — modern meeting room"},{largeImg:"./img/gallery/large/3-2.jpg",smallImg:"./img/gallery/small/3-2.jpg",alt:"Workspace — laptop desk setup"}],i=({largeImg:a,smallImg:g,alt:e})=>`
<li class="gallery-item">
	<a class="gallery-link" href="${a}">
		<img
			class="gallery-image"
			src="${g}"
			alt="${e}"
			/>
	</a>
</li>
`,s=m.map(i).join(""),l=document.querySelector(".gallery");l.insertAdjacentHTML("beforeend",s);const t=document.querySelector(".container h1");t.after(l);new r(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map

import { LitElement,css ,html } from "lit";

export class ejercicioGallery extends LitElement {
    constructor() {
      super();


      this.attachShadow({ mode: 'open' });
      this.images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZalqVyFtjjlAHCdGy7CLB33A8611HNnw0w&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1msW_l5Ma7PDKGSTDnnqNEE2Jj-6BNIsbsA&s"]
  
      this.shadowRoot.innerHTML = `
        <style>
          .gallery { display: flex; flex-wrap: wrap; }
          .thumbnail { width: 100px; margin: 5px; cursor: pointer; }
          .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); justify-content: center; align-items: center; }
          .modal img { max-width: 90%; max-height: 90%; }
        </style>
        <div class="gallery">
        <h1 class="title-gallery"> Galeria de imagenes</h1>
        <div class="gallery-container"></div>
        </div>
        <div id="modal" class="modal">
          <img id="modal-image" />
          <button id="prev">Previous</button>
          <button id="next">Next</button>
        </div>
      `;
      this.currentImageIndex = 0;

   
    }
  
    
    connectedCallback() {

      const gallery = this.shadowRoot.querySelector('.gallery-container');
      this.images.forEach((image, index) => {
        gallery.innerHTML+=`<img src=${image} id="${index}"  class="imagenes"/>`
      });
      
      this.shadowRoot.querySelectorAll("img").forEach(imagen=>{
        imagen.addEventListener("click", (e)=> this.handlerclick(e));
      });
      this.shadowRoot.getElementById('prev').addEventListener('click', () => this.navigate(-1));
      this.shadowRoot.getElementById('next').addEventListener('click', () => this.navigate(1));
      this.shadowRoot.querySelector('.modal').addEventListener('click', (e) => this.closeModal(e));
    }
    
    handlerclick(event){
    
      const imagen = event.target;
      this.openModal(parseInt(imagen.id));
    }
    openModal(index) {
      this.currentImageIndex = index;
      this.shadowRoot.querySelector('.modal').style.display = 'flex';
      this.updateModalImage();
    }
  
    closeModal(event) {
      if(event.target.id == "modal"){
        this.shadowRoot.querySelector('.modal').style.display = 'none';
      }
      
    }
  
    navigate(direction) {
      this.currentImageIndex = (this.currentImageIndex + parseInt(direction) + this.images.length) % this.images.length;
      this.updateModalImage();
    }
  
    updateModalImage() {
      this.shadowRoot.getElementById('modal-image').src = this.images[this.currentImageIndex];
    }
  }
  
window.customElements.define("image-gallery",ejercicioGallery)
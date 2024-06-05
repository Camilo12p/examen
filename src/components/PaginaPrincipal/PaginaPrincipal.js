import { LitElement, css, html } from 'lit'
import { ejercicioIMC } from '../ejercicio1/ejercicioIMC'
import { ejercicioGallery } from '../ejercicio2/ejercicioGallery'
import { ApiDataList } from '../ejercicio4/ejercicioFetch'
import { TableComponent } from '../ejercicio3/ejercicioTabla'

export class PaginaPrincipal extends LitElement {
  static get styles() {
    return css`
      .container{
        widht:100%;
        margin: 100px auto;
        display:flex;
        justify-content: space-around;
      }

      .title{
        font-size: 3rem;
      }

      .button-container{

        display:flex;
        flex-direction: column;
        gap:10px
      }

      .button{
        padding: 10px 20px;
        background-Color: Blue;
        color:white;
        border-radius:10px

      }
    `
  }

  static get properties() {
    return {
    //   count: { type: Number },
    }
  }

  constructor() {
    super()
    // this.count = 0
  }

  render() {
    return html`
    <div class="container">
      <h1 class="title">Examen</h1>
      <div class="button-container">
        <div id="ejercicio1" class="button" @click=${this.onClick} class="button">Ejercicio 1</div>
        <div id="ejercicio2" class="button" @click=${this.onClick} class="button">Ejercicio 2</div>
        <div id="ejercicio3" class="button" @click=${this.onClick} class="button">Ejercicio 3</div>
        <div id="ejercicio4" class="button" @click=${this.onClick} class="button">Ejercicio 4</div>
      </div>
    </div>
    `
  }

  



  onClick(event) {
    const elementoAEliminar = document.querySelector("pagina-principal");
    const indexTop = document.querySelector("body");
    const ejercicio = event.target;
    elementoAEliminar.remove();
    console.log(ejercicio.id)
    
    switch (ejercicio.id){
        case "ejercicio1":
            console.log(ejercicio.id);
            indexTop.insertAdjacentHTML(
                "afterbegin",`<ejercicio-imc></ejercicio-imc>`
            )
            break;
        case "ejercicio2":
            indexTop.insertAdjacentHTML(
                "afterbegin",`<image-gallery></image-gallery>`
            )
            break;
        case "ejercicio3":
          indexTop.insertAdjacentHTML(
            "afterbegin",`<table-component></table-component>`
          )
          break;

        case "ejercicio4":
        indexTop.insertAdjacentHTML(
            "afterbegin",`<api-data-list></api-data-list>`
        )
        break;
    }

   

    
    
  }

  
}

window.customElements.define('pagina-principal', PaginaPrincipal)

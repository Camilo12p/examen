import { LitElement, css, html } from 'lit'
import { ejercicioIMC } from '../ejercicio1/ejercicioIMC'
import { ejercicioGallery } from '../ejercicio2/ejercicioGallery'
import { ApiDataList } from '../ejercicio4/ejercicioFetch'
import { TableComponent } from '../ejercicio3/ejercicioTabla'

export class PaginaPrincipal extends LitElement {
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
      <div id="ejercicio1" @click=${this.onClick} class="button">Ejercicio 1</div>
      <div id="ejercicio2" @click=${this.onClick} class="button">Ejercicio 2</div>
      <div id="ejercicio3" @click=${this.onClick} class="button">Ejercicio 3</div>
      <div id="ejercicio4" @click=${this.onClick} class="button">Ejercicio 4</div>
    </div>
    `
  }

  // como hacer el cambio de pagina


//   startProgram() {
//     const elementToDelete = document.querySelector("index-start");
//     const indexTop = document.getElementById("body");

//     elementToDelete.remove();
//     indexTop.insertAdjacentHTML(
//       "afterbegin",
//       `
//         <questions-element></questions-element>
//     `
//     );
//   }

// como hacer el click
// exitForm(event) {
//     const elementToRemove = event.target;

//     if (elementToRemove.id === "form") {
//       elementToRemove.remove();
//     }
//   }



  onClick(event) {
    const elementoAEliminar = document.querySelector("pagina-principal");
    const indexTop = document.querySelector("body");
    const ejercicio = event.target;
    elementoAEliminar.remove();
    
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

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  }
}

window.customElements.define('pagina-principal', PaginaPrincipal)

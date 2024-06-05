import { LitElement,css,html } from "lit";
import { imagenImc } from "./imagenIMC";

export let imc = 0;

export class ejercicioIMC extends LitElement{

  static get styles() {
    css`
    .container-imc{
      display:flex;
    }

    imagen-imc{
      width:40%
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
        this.informacion ={}
        // this.count = 0
      }


      render(){
        return html `
  <div class="container-imc">
  <form class="formulario" @submit=${this.handlerForm}>
  <div class="container-input">
      <label for="peso">Peso: (kg)</label>
      <input name="peso" type="number" min=20 max=300 id="peso" placeholder="60" required>
  </div>
  <div class="container-input">
      <label for="altura">Altura (centimetros)</label>
      <input name="altura" type="number" id="altura" min=60 max =300 placeholder="1.7" required>
  </div>

<button type="submit">Enviar</button>
</form>
</div> `
      }


      handlerForm(event) {
        event.preventDefault();
        const container = this.shadowRoot.querySelector(".container-imc");
        const infomacionObtenida = new FormData(event.target);
        this.informacion["peso"] = infomacionObtenida.get("peso");
        this.informacion["altura"] = parseFloat(parseInt(infomacionObtenida.get("altura"))/100);

        imc = this.informacion.peso / (this.informacion.altura*this.informacion.altura)

        container.insertAdjacentHTML("afterend",
        `<imagen-imc class="image-imc" ></imagen-imc>`
        )
                

    
        // this.postMethod(client);    
      }
    
}


window.customElements.define('ejercicio-imc', ejercicioIMC)
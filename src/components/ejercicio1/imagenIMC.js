import { LitElement,css , html } from "lit";
import { imc } from "./ejercicioIMC";

export class imagenImc extends LitElement {
    static get properties() {
        return {
            imc: { type: Number },
        }
      }

      constructor(){
        super()
        this.imc= imc
        this.imgsSrc=[
            {title: "Normal", src:"https://thumbs.dreamstime.com/z/silueta-de-hombre-adulto-vectorial-en-ba%C3%BAles-nataci%C3%B3n-con-figura-delgada-un-car%C3%A1cter-impersonal-los-ba%C3%B1o-persona-masculina-228784794.jpg"},
            {title: "Sobre Peso", src:"https://img.freepik.com/vector-gratis/silueta-masculina-humana-sobre-fondo-blanco_1308-69719.jpg"},
            {title: "Obesidad 1", src:"https://previews.123rf.com/images/majivecka/majivecka1911/majivecka191100124/133626339-silueta-de-vector-de-hombre-obeso-sobre-fondo-blanco-s%C3%ADmbolo-de-ni%C3%B1o-gordo-insalubre-gente.jpg"},
            {title: "Obesidad 2", src:"https://as2.ftcdn.net/v2/jpg/05/34/48/77/1000_F_534487705_UKyBzAH0TEcA3UD29GHb1lregSdOD5s0.jpg"},
            {title: "Obesidad 3", src:"https://thumbs.dreamstime.com/z/obesidad-hombre-gordo-de-silueta-d%C3%ADa-internacional-contra-la-infograf%C3%ADa-ilustraci%C3%B3n-vectores-sobre-fondo-aislado-164627594.jpg"},
            {title: "El valor no es valido" },
            
        ]
        this.index=this.obtenerSrc(this.imc);
      }

      obtenerSrc(imc){
        console.log(imc)
        if(imc>=18.5 && imc<25){
            return 0;
        }else if(imc>=25 && imc<30){
            return 1;
        }else if(imc>=30 && imc<35){
            return 2;
        } else if(imc>=35 && imc<40){
            return 3;
        } else if(imc>=40){
            return 4;
        } else {
            return 5;
        }

      }

    

      render(){
        return html`<div class="imagen-container">
                <div class="title-img">${this.imgsSrc[this.index].title}</div>
                <img src="${this.imgsSrc[this.index].src}" alt="" />
            </div>`
      }


}


window.customElements.define('imagen-imc', imagenImc)
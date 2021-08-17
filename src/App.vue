<template>
  <div class="wrapper">
    <a v-if="theme=='light'" id="switch-theme" @click="switchTheme()" title="Mudar para tema escuro">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-theme-light-dark" width="24" height="24" viewBox="0 0 24 24"><path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" /></svg>
    </a>
    <a v-else id="switch-theme" @click="switchTheme()" title="Mudar para tema claro">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-theme-light-dark" width="24" height="24" viewBox="0 0 24 24"><path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" /></svg>
    </a>
    <form v-if="temResultado == false" class="container-principal">
      <h1>CALCULADORA IMC</h1>
      <div class="wrapper-radios">
        <h3>Selecione seu Gênero</h3>
        <input
          type="radio"
          class="bt-radio"
          id="homem"
          name="gender"
          value="homem"
          v-model="genero"
        />
        <label for="homem" class="label-rd">Homem</label>
        <input
          type="radio"
          class="bt-radio"
          id="mulher"
          name="gender"
          value="mulher"
          v-model="genero"
        />
        <label for="mulher" class="label-rd">Mulher</label>
      </div>
      <div class="wrapper-campos">
        <div class="campo">
          <label for="campoAltura" class="labels">Altura(m)</label>
          <input
            type="number"
            name="inputAltura"
            id="campoAltura"
            placeholder="Sua altura aqui"
            class="campoTexto"
            v-model="altura"
          />
        </div>

        <div class="campo">
          <label for="campoPeso" class="labels">Peso(kg)</label>
          <input
            type="number"
            name="inputPeso"
            id="campoPeso"
            placeholder="Seu peso aqui"
            class="campoTexto"
            v-model="peso"
          />
        </div>

        <div class="campo">
          <label for="campoIdade" class="labels">Idade</label>
          <input
            type="number"
            name="inputIdade"
            id="campoIdade"
            placeholder="Sua idade aqui"
            class="campoTexto"
          />
        </div>
      </div>
      <div class="imageWrapper"></div>
      <p v-if="errors.length" id="msg-erro">
        <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
    </p>
    </form>

    <div v-else>
      <ResultViewer
        :imc="imc"
        :peso="peso"
        :altura="altura"
        :pesoIdeal="pesoIdeal"
        :genero="genero"
        :theme="theme"
      ></ResultViewer>
    </div>
    <div class="wrapper-botao">
      <button v-if="textoBotao=='Calcular'" class="botao" @click="checkForm" :title="textoBotao+' IMC'">
        {{ textoBotao }}
      </button>
      <button v-else class="botao" @click="calculaImc(peso, altura)" :title="textoBotao+' o teste'">
        {{ textoBotao }}
      </button>
    </div>
    <span>Desenvolvido com <i class="fas fa-heart"></i> por <a href="github.com/sameoldcarlos">{{author}}</a></span>
  </div>
</template>

<script>
import ResultViewer from "./components/ResultViewer.vue";
import getCookie from "./getCookie.js";
import setTheme from "./setTheme.js";

export default {
  name: "App",
  components: {
    ResultViewer,
  },
  data() {
    return {
      errors : [],
      textoBotao: "Calcular",
      temResultado: false,
      peso: null,
      altura: null,
      imc: 0,
      pesoIdeal: "",
      genero: null,
      theme: "",
      image_url_light: require("./assets/img/light/imagemHome.svg"),
      image_url_dark: require("./assets/img/dark/imagemHome.svg"),
      root: document.documentElement,
      author: '<Carlos/Alves>',
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.peso && this.altura && this.genero) {
        this.calculaImc(this.peso, this.altura)
        return true;
      }

      this.errors = [];

      if (!this.peso) {
        this.errors.push("O peso é obrigatório.");
      }
      if (!this.altura) {
        this.errors.push("A altura é obrigatória.");
      }
      if (!this.genero) {
        this.errors.push("O gênero é obrigatório.");
      }
      console.log(this.errors);
      e.preventDefault();
    },
    novocalculo() {
      this.temResultado = false;
    },
    calculaPesoIdeal(altura) {
      var pesoMinimo = Math.ceil(18.5 * altura ** 2);
      var pesoMaximo = Math.ceil(25 * altura ** 2);

      var pesoIdeal = pesoMinimo + " kg - " + pesoMaximo + " kg";

      return pesoIdeal;
    },
    calculaImc(peso, altura) {
      if (this.textoBotao == "Refazer") {
        this.temResultado = false;
        this.errors = [];
        this.textoBotao = "Calcular";
      } else {
        this.imc = Math.ceil(peso / (altura * altura));
        this.pesoIdeal = this.calculaPesoIdeal(altura);
        this.temResultado = true;
        this.textoBotao = "Refazer";
      }
      this.theme = getCookie("theme");
    },
    changeImage(url) {
      this.root.style.setProperty("--image_home", "url(" + url + ")");
    },
    switchTheme() {
      if (getCookie("theme") == "light") {
        setTheme("dark");
        this.changeImage(this.image_url_dark);
        this.theme = "dark";
      } else {
        setTheme("light");
        this.changeImage(this.image_url_light);
        this.theme = "light";
      }
    },
    applyTheme(theme) {
      if (theme === "" || theme === "light") {
        setTheme("light");
        this.changeImage(this.image_url_light);
        this.theme = "light";
      } else {
        setTheme("dark");
        this.changeImage(this.image_url_dark);
        this.theme = "dark";
      }
    },
  },
  mounted() {
    this.applyTheme(getCookie("theme"));
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  list-style: none;
  border: 0;
  text-decoration: none;
}
*:focus {
  outline: 0 !important;
}

:root {
  --image_home: url("./assets/img/light/imagemHome.svg");
  --switch_theme_fill: rgb(0, 0, 0);
  --switch_theme_fill_hover: rgb(78, 78, 78);
  --button_hover: rgb(6, 102, 65);
  --fields-bg: rgb(255, 255, 255);
  --fields-text: rgb(89, 92, 88);
  --title_and_button: rgb(8, 145, 92);
  --text-color: rgb(51, 46, 46);
  --bg-color: rgb(207, 248, 250);
}
#app {
  background: var(--bg-color);
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  min-height: 1000px;
  align-content: center;
}

a{
  color: var(--text-color);
}
span i{
  color: rgb(136, 29, 212);
}
span a:hover {
  color: rgb(136, 29, 212);
}

#msg-erro{
  margin-top: 30px;
  
}
#msg-erro li {
  margin: 3px 0;
  color: rgb(226, 72, 72);
}
#switch-theme {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto;
  padding-top: 30px;
}
#switch-theme:hover {
  cursor: pointer;
}

#switch-theme svg {
  fill: var(--switch_theme_fill);
}

#switch-theme svg:hover {
  fill: var(--switch_theme_fill_hover);
}
.container-principal {
  margin: 0 auto;
  width: 100%;
  height: auto;
  max-width: 800px;
  align-content: center;
  display: grid;
  grid-template-columns: 50% 50%;
  font-weight: 700;
}
h1 {
  grid-column: 1/3;
  padding-top: 78px;
  text-align: center;
  color: var(--title_and_button);
}
.wrapper {
  width: 100%;
  text-align: center;
}
.wrapper-radios {
  text-align: left;
  grid-column: 1/3;
  margin: 30px 10px 0px 10px;
}
.wrapper-campos {
  grid-column: 1/2;
  text-align: left;
  margin: 10px;
  color: var(--fields-text);
  font-weight: bold;
}

.wrapper-botao {
  margin: 20px auto;
  height: fit-content;
}
.imageWrapper {
  grid-column: 2/2;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
  background-repeat: no-repeat;
  background-image: var(--image_home);
  background-position: center;
}

.bt-radio {
  margin: 15px 5px 15px auto;
  grid-column: 1/3;
}
.label-rd {
  margin: 0 10px 0px 0px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.campo {
  font-family: "Hind", sans-serif;
  background: var(--fields-bg);
  color: var(--fields-text);
  margin: 30px 0;
  height: auto;
  border-radius: 8px;
  padding: 5px 0;
  border: 1px solid rgb(89, 92, 88);
}
.campo label {
  padding-left: 5px;
  padding-top: 5px;
}
.campoTexto {
  background: var(--fields-bg);
  color: var(--fields-text);
  width: 95%;
  height: 30px;
  padding-left: 5px;
  border-radius: 8px;
}

.botao {
  background: var(--title_and_button);
  border-radius: 50px 15px;
  border: none;
  width: 150px;
  margin: 30px auto;
  height: 80px;
  color: #ffffff;
  font-size: 17px;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
}

.botao:hover {
  background: var(--button_hover);
  border: none;
  cursor: pointer;
  transform: scale(1.1);
  transition-duration: 0.5s;
}
</style>

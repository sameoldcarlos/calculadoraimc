<template>
<div class="wrapper">
  <form v-if="temResultado==false" class="container-principal">
    <h1>CALCULADORA IMC</h1>
    <div class=wrapper-radios>
      <h3>Selecione seu Gênero</h3>
      <input type="radio" class="bt-radio" id="homem" name="gender" value="homem" v-model="genero">
      <label for="homem" class="label-rd">Homem</label>
      <input type="radio" class="bt-radio" id="mulher" name="gender" value="mulher" v-model="genero">
      <label for="mulher" class="label-rd">Mulher</label>
      </div>
    <div class="wrapper-campos">
      
      
      <div class="campo">
        <label for="campoAltura" class="labels">Altura(m)</label>
        <input type="number" name="inputAltura" id="campoAltura" placeholder="digite a altura" class="campoTexto" v-model="altura"> 
      </div>      
      
      <div class="campo">
        <label for="campoPeso" class="labels">Peso(kg)</label>
        <input type="number" name="inputPeso" id="campoPeso" placeholder="digite o peso" class="campoTexto" v-model="peso">
      </div>
      
      <div class="campo">
        <label for="campoIdade" class="labels">Idade</label>
        <input type="number" name="inputIdade" id="campoIdade" placeholder="digite a idade" class="campoTexto">
      </div>

      
     </div>
     <div class="imageWrapper">
       <img src="./assets/img/imagemHome.svg" alt="">
     </div>
  </form>    
    
  <div v-else>
    <ResultViewer :imc="imc" :peso="peso" :altura="altura" :pesoIdeal="pesoIdeal" :genero="genero"></ResultViewer>
  </div>
  <div class="wrapper-botao">
    <button class="botao" @click="calculaImc(peso, altura)">{{textoBotao}}</button>
  </div>  

</div>

</template>

<script>
import ResultViewer from './components/ResultViewer.vue'
export default {
  name: 'App',
  components: {
    ResultViewer
  },
  data() {
    return {
      textoBotao : "Calcular",
      temResultado : false,
      peso : null,
      altura : null,
      imc : 0,
      pesoIdeal : '',
      genero: ''
    }
  },
  methods: {
    novocalculo(){
      this.temResultado = false;
    },
    calculaPesoIdeal(altura) {
      var pesoMinimo = Math.ceil(18.5 * (altura ** 2));
      var pesoMaximo = Math.ceil(25 * (altura ** 2));

      var pesoIdeal = pesoMinimo + ' kg - ' + pesoMaximo  + ' kg'
      
      return pesoIdeal;
    },
    calculaImc(peso, altura) {
      if (this.textoBotao == "Refazer"){
        this.temResultado = false;
        this.textoBotao = 'Calcular'
      }
      else {
        this.imc = Math.ceil(peso/(altura * altura));
        this.pesoIdeal = this.calculaPesoIdeal(altura);                
        this.temResultado = true;
        this.textoBotao = 'Refazer';
      }
    }
  }
}
</script>

<style>
* {
  padding:0;
  margin:0;
  vertical-align:baseline;
  list-style:none;
  border:0
}
#app {
  background: #BDE5DE;
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #263238;
  min-height: 1000px;
  align-content: center;
  
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
h1{
  grid-column: 1/3;  
  padding-top: 78px;
  text-align: center;
  color: #08915C;
}
.wrapper {
  width: 100%;
  text-align:center;
}
.wrapper-radios {
  text-align:left;
  grid-column: 1/3;
  margin: 30px 10px 0px 10px;
}
.wrapper-campos {
  grid-column: 1/2;
  text-align:left;
  margin: 10px;
  color: #595C58;
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
}

.imageWrapper img {
  width: 80%;
  max-height: 400px;
  padding-bottom: 0;
  padding-top: auto;
}
.bt-radio {
  margin: 15px auto;
  grid-column: 1/3;
}
.label-rd {
  margin: 0 10px 0px 0px;
}
.campo {
  font-family: 'Hind', sans-serif;
  background: #ffffff;
  margin: 30px 0;
  height: auto;
  border-radius: 8px;
  padding: 5px 0;  
}
.campo label{
  padding-left: 5px;
  padding-top:5px;
}
.campoTexto {
  width: 95%;
  height: 30px;
  padding-left: 5px;
  border-radius: 8px;
}

.botao {
  background:#08915C;
  border-radius: 50px 15px;
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
  background: #066641;
  cursor:pointer;
  transform: scale(1.1);
  transition-duration: .5s;
}

</style>

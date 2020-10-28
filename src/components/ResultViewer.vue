<template>
    <div class="container-principal">
        <h1>Seu IMC indica {{resultado}}</h1>
        <div class="imc-pointer" :class="className">
            <div class="imc-text">
                <h2>IMC</h2> 
                <h2>{{imc}}</h2>
            </div>            
        </div>
        <dv class="dados">
            <h3>Peso {{peso}}kg</h3>
            <h3>Altura {{altura}}m</h3><br>
            <h3>Seu peso ideal</h3>
            <h3>{{pesoIdeal}}</h3>
        </dv>
        <div class="detalhes">
            <p>{{avaliaResultado()}}</p>
        </div>
               
        <div class=imageHolder>
            <img :src="image" alt="">
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: "ResultViewer",
    props: ['imc', 'peso', 'altura','pesoIdeal', 'genero'],
    data () {
        return {
            image: '',
            resultado: '',
            className: ''
        }
    },
    methods: {
        avaliaResultado() {
            var texto = '';
            if(this.$props.imc < 18.5) {
                texto = 'seu IMC esta abaixo do peso para adultos de sua altura. mantenha uma alimentação saudável e '+
                'pratique exercicios para alcançar seu peso ideal e evitar doenças.';
                this.image = require('../assets/img/'+this.$props.genero+'Abaixo.svg');
                this.resultado = 'abaixo do peso',
                this.className = 'nao-saudavel'
            }
            else if(this.$props.imc >= 25) {
                texto = 'Seu IMC indicou sobrepeso para adultos de sua altura. mantenha uma alimentação saudável e '+
                'pratique exercicios para alcançar um peso ideal e evitar doenças.';
                this.image = require('../assets/img/'+this.$props.genero+'Sobrepeso.svg');
                this.resultado = 'sobrepeso'
                this.className = 'nao-saudavel'
            }
            else {
                texto = 'seu IMC esta dentre o recomendado para adultos de sua altura. mantenha uma alimentação saudável e' + 
                'pratique exercicios para manter seu peso ideal e evitar doenças.';
                this.image = require('../assets/img/'+this.$props.genero+'Recomendado.svg');
                this.resultado = 'peso saudável'
                

            }
            
            return texto;
        },
    }    
}
</script>

<style scoped>
.container-principal {
    grid-template-columns: 40% 20% 40%;
}
h1,h2,h3 {
    text-transform: uppercase;
}
h1 {
    grid-column: 1/4;
}
h3 {
    text-align: center;
    color: #08915C;
}

.imc-pointer {
    grid-column: 1/3;
    background: #c4c4c4;
    width: 200px;
    height: 200px;
    margin: 60px 20px 25px 10px;
    border-radius: 50%;
    border: 8px solid#134AD9;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

}

.imc-pointer h2 {
    text-align: center;
    color: #595C58;
}

.nao-saudavel {
    border: 7px solid #D96613;
}
.dados {
    grid-column: 3/4;
    margin: 60px 10px 25px 10px;
}
.detalhes {
    grid-column: 1/3;
    color: #595C58;
    margin: 30px 20px 25px 10px;
}

.imageHolder {
    grid-column: 3/4;
    display: flex;
  justify-content: flex-end;
}
    .imageHolder img{
        margin-bottom: 0;
        width:90%;
        max-width: 200px;
        height: auto;
    }
</style>
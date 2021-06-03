const app = Vue.createApp({
    data() {
        return {
            articulos: [],
            juguetes: [],
            medicamentos: [],
            cards: [],
            stocks: [],

        }
    },
    created() {
        fetch("https://apipetshop.herokuapp.com/api/articulos")
            .then(res => res.json())
            .then(data => {
                this.articulos = data.response
                this.juguetes = data.response.filter(articulo => articulo.tipo == "Juguete")
                this.medicamentos = data.response.filter(articulo => articulo.tipo == "Medicamento")
                this.stocks = data.response.filter(articulo => articulo.stock <= 5)
                console.log(this.articulos)
                console.log(this.juguetes)
                console.log(this.stocks)
                console.log(this.medicamentos)
            }).catch(err => console.log(err.message))
    },

    computed: {
        imprimirCards() {
            this.cards = []
            for (let i = 0; i < this.juguetes.length; i++) {
                this.cards.push(this.juguetes[i])
            }
            return this.cards
        },
        imprimirCardsMedicamentos() {
            this.cards = []
            for (let i = 0; i < this.medicamentos.length; i++) {
                this.cards.push(this.medicamentos[i])

            }
            return this.cards
        }
    }
})



app.mount("#wrapper")



function alerta() {
    alert("Tu informacion fue enviada correctamente")

}
let imagenCard = document.getElementsByClassName("imagenCard")
let tituloCard = document.getElementsByClassName("tituloCard")

const app = Vue.createApp({
    data() {
        return {
            articulos: [],
            juguetes: [],
            medicamentos: [],
            cards: [],
            stocks: [],
            carrito: [],
            carritoImprimir: [],
            comprar: (event) => {
                this.carrito.push(event.target)
            },

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


            }).catch(err => console.log(err.message))
    },
    methods: {

    },
    computed: {
        carro() {
            this.carritoImprimir = []
            for (let i = 0; i < this.carrito.length; i++) {
                this.carritoImprimir.push(this.carrito[i])
            }
            console.log(this.carritoImprimir)

            return this.carritoImprimir
        },

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
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let tel = document.getElementById("tel").value

    if (nombre == "" || apellido == "0" || tel == "") {
        alert("Debes completar tus datos personales")
        return false
    } else {

        alert("Tu informacion fue enviada correctamente")
    }

}
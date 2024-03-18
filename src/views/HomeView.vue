<template>
  <HeaderComponent></HeaderComponent>
  <div class="container-fluid">
      <div class="row m-3">
          <div class="col-md-9">
              <div class="container">
                  <div class="row scrollable-content">
                  <div class="col-4 mt-2" v-for="producto in productos" :key="producto">
                      <div class="card" style="width: 18rem;">
                          <img class="card-img-top" loading="lazy" :src="producto.imagen" :alt="producto.titulo">
                          <div class="card-body">
                              <h5 class="card-title">{{ producto.titulo }}</h5>
                              <p class="card-text">{{ producto.descrip }}</p>
                              <p class="card-text">{{ formatoPesos(producto.precio) }}</p>
                              <button type="button"  @click="showData(producto)" class="btn btn-primary">Añadir al Carrito</button>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
          </div>
          <div class="col-md-3 carrito scrollable-content" style="border">
              <div>Carrito de compras</div>
              <div class="card">
                <div class="card-body">
                    <div class="row">
                      <div class="col">
                      <ul v-for="producto in prodoctoLista" :key="producto">
                        <li> 
                          <img class="card-img-top" width="5%" loading="lazy" :src="producto.imagen" :alt="producto.titulo">
                          {{producto.titulo}} = {{ formatoPesos(producto.precio) }}
                        </li>
                      </ul>
                      </div>
                    </div>  

                    <p class="card-text"><strong>Total:</strong> {{ formatoPesos(totalCarrito)}}</p>
                    <router-link to="/Pagos" style="text-decoration: ">
                    <button type="button" class="btn btn-primary mt-2">Comprar</button><br>
                    </router-link>
                    <button type="button" class="btn btn-danger mt-3" @click="clearData">Limpiar carrito</button>
                </div>
              </div>
          </div>
      </div>
  </div>

  <div class="container mt-5">
    <FooterComponent></FooterComponent>
  </div>

</template>
<script>
import HeaderComponent from './../components/HeaderComponent.vue';
import FooterComponent from './../components/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      prodoctoLista: [],
      totalCarrito: 0,
      totales: [],
      productos: [
        { id: 1, titulo: 'motorola one fusion', precio: 45000000, descrip: 'gb 128 , ram 8, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/motorola-one-fusion-upscaled.png')},
        { id: 2, titulo: 'samsung galaxy s4 ', precio: 15000000, descrip: 'gb 68 , ram 4, caja cargador ,caset de proteccion', imagen: require("@/assets/ImagenesProyecto/samsung_galaxy_s4.png")},
        { id: 3, titulo: 'iphone 8 plus', precio: 20000000, descrip: 'gb 42 , ram 3, caja cargador ,caset de proteccion',imagen: require('@/assets/ImagenesProyecto/iphone-x-upscaled.png')},
        { id: 4, titulo: 'iphone x ', precio: 25000000, descrip: 'gb 16 , ram 2, caja cargador ,caset de proteccion',imagen: require('@/assets/ImagenesProyecto/iphone-x-upscaled.png')},
        { id: 5, titulo: 'Samsung m12', precio: 25000000, descrip: 'gb 32 , ram 4, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/samsung-m12-upscaled.png')},
        { id: 6, titulo: 'motorola e 32 ', precio: 25000000, descrip: 'gb 68 , ram 4, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/motorola-e32-upscaled.png')},
        { id: 7, titulo: 'Samsung galaxy s3 ultra +', precio: 25000000, descrip: 'gb 68 , ram 4, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/samsung-galaxy-s3-upscaled.png')},
        { id: 8, titulo: 'iphone 14 pro max +', precio: 25000000, descrip: 'gb 128 , ram 6, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/iphone-14-pro-max-upscaled.png')},
        { id: 9, titulo: 'iphone 7 plus', precio: 5000000, descrip: 'gb 32 , ram 2, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/iphone-7-plus-upscaled.png')},
      ]
    }
  },
  methods: {
    formatoPesos(valor) {
      const formato = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
      });

      return formato.format(valor / 100);
    },

    showData(precio){
      
      this.totales.push(precio.precio);
      this.prodoctoLista.push(precio)

      this.totalCarrito = this.totales.reduce((total, valor) => total + valor, 0);
        
      console.log("suma", this.totalCarrito);
    },

    clearData() {
      this.totales = [...[]]
      this.prodoctoLista = [...[]]
      this.totalCarrito = 0
    },

  },
}
</script>

<style scoped>

.card {
  border-color: #08fcfc;
  width: 18rem;
}
.carrito {
  border: 1px solid;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border-left-color: linear-gradient(70deg, #08fcfc, #212223);
}

.scrollable-content {
 max-height: 400px;
 overflow-y: auto;
}
.scrollable-content::-webkit-scrollbar {
 width: 12px; /* Ancho de la barra de desplazamiento */
}

/* Estilo del pulgar de la barra de desplazamiento */
.scrollable-content::-webkit-scrollbar-thumb {
 background-color: #08fcfc; /* Color de fondo del pulgar */
 border-radius: 6px; /* Borde redondeado del pulgar */
 border-color: #828788;
}

/* Estilo de la pista de la barra de desplazamiento */
.scrollable-content::-webkit-scrollbar-track {
 background-color: #f1f1f1; /* Color de fondo de la pista */
}

.button-profile {
  text-decoration: none !important;
  color: white;
}
.chat{
 margin-right: 70px;
 

}

</style>

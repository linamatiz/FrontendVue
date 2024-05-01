<template>
  <div class="dashboard">
    <!-- Sección de autenticación -->
    <div v-if="!isLoggedIn" class="authentication">
      <h2 class="text-center mb-4">Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" class="form-control">
        </div>
        <button type="submit" class="boton-administrador">Iniciar sesión</button>
      </form>
    </div>
    <!-- Spanel de control -->
    <div v-else>
      <h1 class="text-center mb-4">Panel de Control</h1>
      <!-- Sección de estadísticas -->
      <div class="statistics mb-4">
        <h2 class="text-center">Estadísticas</h2>
        <ul class="list-group">
          <li class="list-group-item">Usuarios registrados: {{ totalUsers }}</li>
          <li class="list-group-item">Productos en stock: {{ totalProducts }}</li>
        </ul>
      </div>

      <!-- productos -->
      <div class="product-management">
        <h2 class="text-center mb-3">Gestión de Productos</h2>
        <div class="row">
          <div class="col-lg-4 mb-4" v-for="(producto, index) in productos" :key="index">
            <div class="card h-100">
              <img :src="producto.imagen" class="card-img-top" alt="Producto Image">
              <div class="card-body">
                <h5 class="card-title">{{ producto.titulo }}</h5>
                <p class="card-text">
                  <span>Precio: </span>
                  <input type="text" v-model="producto.precio" class="form-control mb-2">
                  <span>Descripción: </span>
                  <textarea v-model="producto.descrip" class="form-control"></textarea>
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-primary" @click="guardarCambios(index)">Guardar</button>
                <button type="button" class="btn btn-danger" @click="eliminarProducto(index)">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      isLoggedIn: false,
      totalUsers: 0,
      totalProducts: 0,
      productos: [
        { id: 1, titulo: 'motorola one fusion', precio: 45000000, descrip: 'gb 128 , ram 8, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/motorola-one-fusion-upscaled.png')},
        { id: 2, titulo: 'samsung galaxy s4 ', precio: 15000000, descrip: 'gb 68 , ram 4, caja cargador ,caset de proteccion', imagen: require("@/assets/ImagenesProyecto/samsung_galaxy_s4.png")},
        { id: 3, titulo: 'iphone 8 plus', precio: 20000000, descrip: 'gb 42 , ram 3, caja cargador ,caset de proteccion',imagen: require('@/assets/ImagenesProyecto/iphone-x-upscaled.png')},
        { id: 4, titulo: 'iphone x ', precio: 25000000, descrip: 'gb 16 , ram 2, caja cargador ,caset de proteccion',imagen: require('@/assets/ImagenesProyecto/iphone-x-upscaled.png')},
        { id: 5, titulo: 'Samsung m12', precio: 25000000, descrip: 'gb 32 , ram 4, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/samsung-m12-upscaled.png')},
        { id: 6, titulo: 'motorola e 32 ', precio: 25000000, descrip: 'gb 68 , ram 4, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/motorola-e32-upscaled.png')},
        { id: 7, titulo: 'Samsung galaxy s3 ultra +', precio: 25000000, descrip: 'gb 68 , ram 4, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/samsung-galaxy-s3-upscaled.png')},
        { id: 8, titulo: 'iphone 14 pro max +', precio: 25000000, descrip: 'gb 128 , ram 6, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/iphone-14-pro-max-upscaled.png')},
        { id: 9, titulo: 'iphone 7 plus', precio: 5000000, descrip: 'gb 32 , ram 2, caja cargador ,caset de proteccion', imagen: require('@/assets/ImagenesProyecto/iphone-7-plus-upscaled.png')}
      ]
    };
  },
  created() {
    // Cargar datos
    this.totalUsers = 10; // datos de usuarios registrados
    this.totalProducts = this.productos.length; // cantidad de productos en la lista
  },
  methods: {
    login() {
      // auth
      const defaultPassword = 'admin2705'; // Contraseña admin
      if (this.password === defaultPassword) {
        this.isLoggedIn = true; // inicio de session con contraseña predeterminada
      } else {
        alert('Contraseña incorrecta'); // si la contraseña es incorrecta se mandara una alerta
      }
    },
    guardarCambios(index) {
      //logica guardar cambios
      console.log('Guardando cambios en el producto:', this.productos[index]);
    },
    eliminarProducto(index) {
      // logica eliminar producto
      this.productos.splice(index, 1);
      console.log('Producto eliminado');
    }
  }
};
</script>


<style scoped>
.uthentication{
  border:black 1px;
}
.dashboard {
  padding: 20px;
}

.statistics .list-group-item {
  border-color: transparent;
}

.product-management .card {
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.product-management .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-management .card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.product-management .card-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.product-management .btn {
  border-radius: 20px;
  padding: 8px 20px;
}

.product-management .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.product-management .btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.product-management .btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.product-management .btn-danger:hover {
  background-color: #bd2130;
  border-color: #bd2130;
}
.boton-administrador{
  background-color: #6eabab;
  text-align: center;
  border-radius: 30px;
  border-color: transparent;
  box-shadow: 1px 1px 1px 1px #2fff13;
  color: white !important;
  padding: 7px;
  font-size: 16px;
  margin-top: 100px;
  height: 60px;
  width: 160px;

}
#password{ 
  margin-left: 580px;
  margin-top: 95px;
  height: 60px;
width: 120px;


}
</style>

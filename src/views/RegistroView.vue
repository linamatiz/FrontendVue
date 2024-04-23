<template>
  <HeaderComponent></HeaderComponent>
  <div class="containerPrincipal px-5">
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="crearUsuario">
                <div class="mb-3">
                  <label for="numerodoc" class="form-label">Numero De documento</label>
                  <input type="text" class="form-control" id="numerodoc" name="numerodoc" v-model="numero_documento" required>
                </div>
                <div class="mb-3">
                  <label for="contrasena" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="contrasena" name="contrasena" v-model="password" required>
                </div>
                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="nombre" name="nombre" v-model="nombre" required>
                </div>
                <div class="mb-3">
                  <label for="apellido" class="form-label">Apellido</label>
                  <input type="text" class="form-control" id="apellido" name="apellido" v-model="apellido" required>
                </div>
                <div class="mb-3">
                  <label for="correo" class="form-label">Correo</label>
                  <input type="email" class="form-control" id="correo" name="correo" v-model="correo" checked>
                </div>
                
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                  Eres mayor de edad
                    </label>
                </div>
                <div class="row justify-content-center px-5 mb-3">
                  <button type="submit" class="boton-registrate">
                    Registrate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import HeaderComponent from './../components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'RegistroView',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      numero_documento: '',
      password: '',
      nombre: '',
      apellido: '',
      correo: ''
    }
  },
  methods: {
    crearUsuario() {
      const query = {
        numero_documento: this.numero_documento,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        password: this.password
      }

      axios.post('http://127.0.0.1:8000/api/create', query)
      .then(response => {
        console.log('respuesta registro: ', response);
        this.mostrarAlerta(false);
        localStorage.setItem('logeado', JSON.stringify(true));
        localStorage.setItem('documento', JSON.stringify(this.numero_documento));
      }).catch(error => {
        this.mostrarAlerta(true);
        console.log('error al realizar el registro', error)
      });
    },

    mostrarAlerta(esError) {
      return Swal.fire({
        title: esError ? '¡Error!' : 'Bien',
        text: esError ? 'corrige tus datos' : 'registrado',
        icon: esError ? 'error' : 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: esError ? 'red' : 'blue',
      }).then(() => {
        if(esError) {
          return
        }
        this.$router.push('/home');
      });
    }
  }
}
</script>

<!-- css -->
<style scoped>

.container-check {
  display: flex;
  flex-flow: column;
}

.containerPrincipal {
  background: linear-gradient(500deg, #c4c4c4, #828788);
  color: #000000;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
}

.nav-link {
  background: linear-gradient(500deg, #c4c4c4, #828788);
}
.boton-registrate{
  height: 40px;
  background-color: darkslategray;
        border-color: transparent;
        box-shadow: 1px 1px 1px 1px #3bdbc3;
        color: white !important;
        border-radius: 10px;
    }

.boton-registrate:hover {
    background-color: #8eb7b0 ;
    }



</style>

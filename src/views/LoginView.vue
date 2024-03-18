<template>
  <HeaderComponent></HeaderComponent>
  <div class="containerPrincipal">
    <div class="container px-4 mt-5 mb-5">
      <div class="row w-100 justify-content-center align-items-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header text-center" style="background-color: darkslategray !important; color: white">
              <h3>Iniciar Sesión</h3>
            </div>
              <div class="card-body">
                <form @submit.prevent="login">
                  <div class="mb-3">
                    <label for="usuario" class="form-label">Numero de documento</label>
                    <input type="text" class="form-control" id="usuario" v-model="numero_documento" name="numero_documento" required>
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" v-model="contra" name="password" required>
                  </div>
                  <div class="row px-5 mb-3 mt-2">
                    <button class="btn btn-primary mb-2" type="submit">Iniciar Sesión</button>
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
import FooterComponent from './../components/FooterComponent.vue';

export default {
  name: 'LoginView',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      numero_documento: '',
      contra: ''
    }
  },
  methods: {
    login(){
      const query = {
        numero_documento: this.numero_documento,
        password: this.contra
      }

      console.log('query', query)

      axios.post('http://127.0.0.1:8000/api/inicio-sesion', query)
      .then(response => {
        if(response.data.estatus == '401' || response.data.estatus == 401) {
          this.mostrarAlert(response.data.message);
        }else {
          this.$router.push('/home');
          localStorage.setItem('logeado', JSON.stringify(true));
          localStorage.setItem('documento', JSON.stringify(this.numero_documento));
        }
      }).catch(error => console.log(error));
    },

    mostrarAlert(mensaje) {
      return Swal.fire({
        title: '¡Error!',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'red',
      });
    }
  }
}
</script>

<style scoped>

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
</style>

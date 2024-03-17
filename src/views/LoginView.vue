<template>
  <div class="containerPrincipal">
    <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span class="fs-4" style="color: white">Compra & Venta</span>
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link to="/welcome" style="text-decoration: none">
              <a class="nav-link px-2 text-secondary" style="color: white !important;">Inicio</a>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="position-absolute top-0 end-0 p-3">
        <button type="button" class="btn btn-warning " style="background-color: lightsteelblue;border-color: transparent;">
          <router-link to="/registro" style="text-decoration: none">
            Registrate
          </router-link>
        </button>
      </div>
    </div>
    </header>

    <div class="container px-4 mt-5 mb-5">
      <div class="row w-100 justify-content-center align-items-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header text-center " style="background-color: darkslategray !important; color: white">Iniciar Sesión</div>
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
                  <div class="row">
                    <button class="btn btn-primary mb-2" type="submit">Iniciar Sesión</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="container mt-5">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-body-secondary">&copy; 2023 Company, Inc</p>
        <ul class="nav col-md-4 justify-content-end">
          
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'LoginView',
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
          this.mostrarAlert();
        }else {
          this.$router.push('/home');
        }
      }).catch(error => console.log(error));
    },

    mostrarAlert() {
      return Swal.fire({
        title: '¡Error!',
        text: 'Usuario y/o contraseña incorrecta',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'red',
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    padding-top: .75rem;
    padding-bottom: .75rem;
    background: linear-gradient(-60deg, #08fcfc, #212223);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
    color: white !important;
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
</style>

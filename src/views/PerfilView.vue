<template>
    <header class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-1 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span class="fs-4">Compra & Venta</span>
                        </a>
            </div>
        </div>
            
    </header>

    <div class="container ml-auto">
 
        <!-- actualizacion de datos"
        
        </div> -->
        <div class="col-md-19">
            <div class="card">
                <div class="card-header">Actualizar Perfil</div>
                    <div class="card-body">
                        <form method="POST">
                            <div class="form-group ">
                                <label for="numero_documento">Número de Documento</label>
                                <input type="text" class="form-control" id="numero_documento" name="numero_documento"  disabled>
                            </div>
                            <div class="form-group">
                                <label for="nombre">Nombre</label>
                                <input type="text" class="form-control" id="nombre" name="nombre" >
                            </div>
                            <div class="form-group">
                                <label for="apellido">Apellido</label>
                                <input type="text" class="form-control" id="apellido" name="apellido">
                            </div>
                            <div class="form-group">
                                <label for="correo">Correo</label>
                                <input type="text" class="form-control" id="correo" name="correo" >
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control" id="password" name="password" >
                            </div>
                            

                            <button type="submit" class="btn btn-primary">Actualizar Perfil</button>
                        </form>
                        
                        <router-link to="/home" style="text-decoration: none">
                            <button class="btn btn-danger mt-2">Atras</button>
                        </router-link>
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
</template>

<script>
import axios from 'axios';

export default {
    name: 'PerfilView',
    data() {
        return {
            numero_documento: '1000791793',
            nombre: '',
            apellido: '',
            correo: ''
        }
    },
    methods: {
        perfil() {
            axios.get(`http://127.0.0.1:8000/api/perfil?numero_documento=${this.numero_documento}`)
            .then(response => {
                console.log('response', response)
            }).catch(error => {
                console.log('error al consultar el perfil', error);
            })
        },

        actualizarPerfil() {
            const query = {

            }
            axios.post('http://127.0.0.1:8000/api/perfil', query)
            .then(response => {
                console.log('response', response)
            }).catch(error => {
                console.log('error al actualizar el perfil', error);
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fs-4{
    color: rgb(132, 209, 205); /* Establecer el color del texto */
    text-align: center; /* Centrar el texto horizontalmente */
    font-size: 29px; /* Establecer el tamaño del texto en 29px */

}

</style>

<template>
    <HeaderComponent></HeaderComponent>
    <div class="container ml-auto">
        <!--actaulizar datos -->
        <div class="col-md-19 mt-5">
            <div class="card">
                <div class="card-header">Actualizar Perfil</div>
                    <div class="card-body">
                        <form method="POST" @submit.prevent="actualizarPerfil">
                            <div class="form-group ">
                                <label for="numero_documento">Número de Documento</label>
                                    <input type="text" class="form-control" id="numero_documento" v-model="numero_documento" name="numero_documento"  disabled>
                            </div>
                            <div class="form-group">
                                <label for="nombre">Nombre</label>
                                    <input type="text" class="form-control" id="nombre" v-model="nombre" name="nombre" >
                            </div>
                            <div class="form-group">
                                <label for="apellido">Apellido</label>
                                    <input type="text" class="form-control" id="apellido" v-model="apellido" name="apellido">
                            </div>
                            <div class="form-group">
                                <label for="correo">Correo</label>
                                    <input type="text" class="form-control" id="correo" v-model="correo" name="correo" >
                            </div>
                            <br>
                            <button type="submit" class="boton-actualizar">Actualizar Perfil</button>
                        </form>
                        <router-link to="/home" style="text-decoration: none">
                            <button class="btn btn-danger mt-3">Atras</button>
                        </router-link>
                    </div>
                </div>
        </div>
    </div>
    <div class="container mt-5">
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import HeaderComponent from './../components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'PerfilView',
    components: {
        HeaderComponent,
        FooterComponent
    },
    data() {
        return {
            numero_documento: '',
            nombre: '',
            apellido: '',
            correo: ''
        }
    },
    created() {
        this.perfil();
    },
    methods: {
        perfil() {
            const documento = JSON.parse(localStorage.getItem('documento'));

            axios.get(`http://127.0.0.1:8000/api/perfil?numero_documento=${documento}`)
            .then(response => {
                console.log('response', response.data.usuario.nombre)
                this.numero_documento = response.data.usuario.numero_documento;
                this.nombre = response.data.usuario.nombre;
                this.apellido = response.data.usuario.apellido;
                this.correo = response.data.usuario.correo;

            }).catch(error => {
                console.log('error al consultar el perfil', error);
            })
        },

        actualizarPerfil() {
            const query = {
                numero_documento: this.numero_documento,
                usuario: {
                    numero_documento: this.numero_documento,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    correo: this.correo
                }
            };

            axios.post('http://127.0.0.1:8000/api/actualizarUsuario', query)
            .then(response => {
                console.log('response', response)
                this.mostrarAlert(response.data.message, false);
            }).catch(error => {
                console.log('error al actualizar el perfil', error);
                this.mostrarAlert('error al actualizar el perfil', true);
            })
        },

        mostrarAlert(mensaje, esError) {
            return Swal.fire({
                title: esError ? '¡Error!' : 'Bien',
                text: mensaje,
                icon: esError ? 'error' : 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: esError ? 'red' : 'blue',
            });
        }
    }
}
</script>

<style scoped>
.fs-4{
    color: rgb(20, 230, 233); /* Establecer el color del texto */
    text-align: center; /* Centrar el texto horizontalmente */
    font-size: 49px; /* Establecer el tamaño del texto */

}
.boton-actualizar{
    height: 40px;
    background-color: #868788;
    border-color: transparent;
    box-shadow: 1px 1px 1px 1px #3bdbc3;
    color: white !important;
    border-radius: 10px;
    }

.boton-actualizar:hover {
    background-color: #47847d ;
    }


</style>

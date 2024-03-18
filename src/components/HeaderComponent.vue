<template>
    <header class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span class="fs-4" style="color: white">Compra & Venta</span>
                </a>

                <ul class="nav mb-2 justify-content-center">
                    <li>
                        <router-link to="/quesomos" style="text-decoration: none">
                            <a class="nav-link px-2 text-secondary" style="color: white !important;">¿Quienes Somos?</a>
                        </router-link>
                    </li>
                    <li v-if="mostrarBotonHome">
                        <router-link to="/home" style="text-decoration: none">
                            <a class="nav-link px-2 text-secondary" style="color: white !important;">Tienda</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Chat" style="text-decoration: none">
                            <a class="nav-link px-2 text-secondary" style="color: white !important;">Atencion al cliente</a>
                        </router-link>
                    </li>
                    <li>
                        <div class="text-end mr-5" v-if="mostrarBoton">  
                            <button type="button" class="btn btn-danger registr-voton me-2" @click="cerrarSession()">
                                Cierra sesion
                            </button>                    
                            <button type="button" class="btn btn-danger registr-voton me-3">
                                <router-link to="/perfil" style="text-decoration: none">
                                    Perfil
                                </router-link>
                            </button>
                        </div>
                    </li>
                    <li>
                        <div class="text-end mr-5" v-if="!mostrarBoton">  
                            <button type="button" class="btn btn-success registr-voton me-2"
                                @click="cerrarSession()"
                                v-if="mostrarBotonLogin">
                                <router-link to="/login" style="text-decoration: none">
                                    Iniciar sesion
                                </router-link>
                            </button>                    
                            <button 
                                type="button" 
                                class="btn btn-danger registr-voton registro me-3" 
                                v-if="mostrarBotonRegistro">
                                <router-link to="/registro" style="text-decoration: none">
                                    Registrate
                                </router-link>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>

</template>
<script>
import axios from 'axios';

export default {
    name: 'HeaderComponent',
    data() {
        return {
            mostrarBoton: true,
            mostrarBotonLogin: true,
            mostrarBotonRegistro: true,
            mostrarBotonHome: true
        }
    },
    created() {
        this.mostrarBotones()
    },
    methods: {
        cerrarSession() {
            axios.get('http://127.0.0.1:8000/api/cerrarSesion')
            .then(() => {
                localStorage.setItem('logeado', JSON.stringify(false));
                localStorage.removeItem('documento');
                this.$router.push('/login');
            }).catch(() => {
                //alerta que muestre que no se pudo cerrar la sesion
            })
        },

        //mostrar botones de inicio si esta logeado
        mostrarBotones() {
            const logeado = JSON.parse(localStorage.getItem('logeado'));

            this.mostrarBoton = logeado;

            if(this.$route.path === '/login') {
                this.mostrarBotonHome = false;
                this.mostrarBotonLogin = false;
                
            }

            if(this.$route.path === '/registro') {
                this.mostrarBotonHome = false;
                this.mostrarBotonRegistro = false;
            }
            if(this.$route.path === '/home') {
                this.mostrarBoton = true;
                this.mostrarBotonRegistro = false;
            }
            
        }
    }
}
</script>
<style scoped>
    header {
        padding-top: .75rem;
        padding-bottom: .75rem;
        background: linear-gradient(70deg, #08fcfc, #212223);
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
        color: white !important;
    }

    ul, li {
        margin-left: 3rem;
    }

    li:hover {
        text-decoration: underline;
    }

    .registr-voton {
        background-color: darkslategray;
        border-color: transparent;
        box-shadow: 1px 1px 1px 1px #3bdbc3;
        color: white !important;
    }

    .registr-voton:active {
        background-color: #3bdbc3 !important;
    }

    a {
        color: white !important;
    }

</style>    
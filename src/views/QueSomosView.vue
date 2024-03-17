<template>
   <HeaderComponent></HeaderComponent>
    <main>
        <section class="caracteristicas">
            <h2>Características</h2>
            <ul>
                <li>buscamos brindar un buen servicio a todos nuestros clientes</li>
                <li>descuentos cada mes</li>
                <li>facil registro</li>
            </ul>
        </section>
        <section class="acerca-de">
            <h2>Acerca de Nosotros</h2>
            <p>
                ¡¡Descubre un mundo de innovación y tecnología en nuestra tienda, donde cada dispositivo cuenta una historia de avance y comodidad
                Desde los últimos modelos de smartphones hasta potentes laptops y accesorios vanguardistas,
                te invitamos a explorar nuestro extenso catálogo que abraza la excelencia tecnológica!
            </p>
        </section>
        <section class="contacto">
            <h2>Contacto</h2>
            <p>Ponte en contacto con nosotros en: compraventa@gmail.com</p>
            <p>3102982982</p>
        </section>
    </main>
    <div class="container mt-5">
        <!-- footer-->
    </div>
</template>

<script>
import HeaderComponent from './../components/HeaderComponent.vue';

export default {
    name: 'QueSomosView',
    components: {
        HeaderComponent
    }
//   props: {
//     msg: String
//   }
}
</script>

<!--css -->
<style scoped>

.enlace li a{
    color: #050505;
}

.enlace li a:hover {
    color: #ffffff;
}

.cambiar-color:hover {
    color:#c4c4c4;
    transition: color 0.2s;
}

head{
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
}


.icono-chip {
    margin-right: 1500px;
    transform: translateY(-89px);
    font-size: 36px;
    margin-top: 20px;
    color: #030303;
}

.icono-chip:hover{
    color:#c4c4c4;
    transition: color 0.2s;
}

body {
    background: linear-gradient(500deg, #c4c4c4, #828788);
    color: #000000;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-size: cover;
}

.registrarme {
    background-color: #fcfcfc;
    color: #030303;
    padding: 13px 26px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
}

.registrarme:hover {
    background-color: #08fcfc;
    color: #000000;
}

.registrarme {
    position: absolute;
    top: 5PX;
    right: 5PX;
    margin: 5px;
    padding: 10px;
    border: 5px double #0c0c0c;
}

.ingresar {
    background-color: #fcfcfc;
    color: #030303;
    padding: 13px 26px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
}

.ingresar:hover {
    background-color: #c4c4c4;
    color: #000000;
}

.ingresar {
    position: absolute;
    top: 70px;
    right: 10px;
    margin: 5px;
    padding: 10px;
    border: 5px double #070707;
}

.caracteristicas, .acerca-de, .contacto {
    margin: 30px;
    padding: 30px;
    border: 1px solid #00ffff;
}

</style>

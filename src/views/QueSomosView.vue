<template>
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

                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2" style="background-color: white;">
                        <router-link to="/login" style="text-decoration: none">
                            Inicia Sesion
                        </router-link>
                    </button>
                    <button type="button" class="btn btn-warning" style="background-color: lightsteelblue;border-color: transparent;">
                        <router-link to="/registro" style="text-decoration: none">
                        Registrate
                        </router-link>
                    </button>
                </div>
            </div>
        </div>
    </header>
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
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-body-secondary">&copy; 2023 Company, Inc</p>
            <ul class="nav col-md-4 justify-content-end">
                <li>
                    <a class="nav-link px-2 text-secondary" style="color: black !important;">&copy; 2023 Company, Inc</a>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'QueSomosView'
//   props: {
//     msg: String
//   }
}
</script>

<!--css -->
<style scoped>
header {
    padding-top: .75rem;
    padding-bottom: .75rem;
    background: linear-gradient(70deg, #08fcfc, #212223);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
    color: white !important;
}

.enlace li {
    color: #fcfdfd;
    font-size: 19px;
    position: relative;
    top: -63px;
    margin-right: 20px
}

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
    /* background: url('https://img.freepik.com/vector-gratis/fondo-tecnologia-digital-alambre-malla-red_1017-27428.jpg?size=626&ext=jpg&ga=GA1.2.1691864751.1692220645&semt=ais') no-repeat center center fixed; */
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

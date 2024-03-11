<template>
  <header class="p-3 text-bg-dark">
      <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                  <span class="fs-4" style="color: white">Compra & Venta</span>
              </a>
              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li>
                      <router-link to="/queSomos" style="text-decoration: none">
                          <a class="nav-link px-2 text-secondary" style="color: white !important;">¿Quienes somos?</a>
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
  <div class="container">
      <div class="row">
          <div class="col">
              <img loading="lazy" src="@/assets/pngwing.png" alt="Imagen de Bienvenida">
          </div>

          <div class="col pt-5">Descubre el futuro en tus manos con nuestra tienda de productos tecnológicos. Desde los últimos teléfonos inteligentes hasta los gadgets más novedosos y accesorios de vanguardia, tenemos todo lo que necesitas para mantenerte a la vanguardia de la tecnología. ¡Visítanos hoy y haz realidad tus sueños tecnológicos Asesoramiento experto: Nuestro equipo de expertos estará encantado de ayudarte a encontrar el producto perfecto que se adapte a tus necesidades y presupuesto.

              Amplia variedad de marcas y modelos: Trabajamos con una amplia gama de marcas líderes en la industria tecnológica para ofrecerte la mejor selección de productos.

              Ofertas y promociones especiales.

          </div>
          </div>
     </div>
</template>

<script>
export default {
  name: 'WelcomeView'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background: linear-gradient(70deg, #08fcfc, #212223);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  color: white !important;
}
</style>

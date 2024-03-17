<template>
    <HeaderComponent></HeaderComponent>
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
import HeaderComponent from './../components/HeaderComponent.vue';

export default {
  name: 'WelcomeView',
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
</style>

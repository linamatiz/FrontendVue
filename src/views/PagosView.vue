<template>
  <HeaderComponent></HeaderComponent>
  <div>
    <h1>Pasarela de Pago</h1>
    <div v-if="!paymentComplete">
      <form @submit.prevent="processPayment">
        <!-- campos de entrada para el usuario-->
        <div class="pagos">
          <div>
            <label>Número de Tarjeta:</label>
            <input type="text" v-model="cardNumber" @input="encryptCardNumber" placeholder="Número de Tarjeta">
          </div>
          <br>
          <div>
            <label>Fecha de Expiración:</label>
            <input type="text" v-model="expDate" placeholder="Fecha de Expiración">
          </div>
          <br>
          <div class="cvv">
            <label>CVV:</label>
            <input type="text" v-model="cvv" placeholder="CVV">
          </div>
          <button class="botonpagar" type="submit">Pagar</button>
        </div>
      </form>

      <!-- Sección la cual nos muestra lo que se está escribiendo en tiempo real -->
      <div class="datos">
        <h2>Datos pago</h2>
        <br>
        <p>Número de Tarjeta: {{ maskedCardNumber }}</p>
        <br>
        <p>Fecha de Expiración: {{ expDate }}</p>
        <br>
        <p>CVV: {{ cvv }}</p>
      </div>
    </div>
    <div v-else>
      <strong>¡Listo! Tu pago ha sido procesado. Revisa tu correo.</strong>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import router from '@/router';
import HeaderComponent from './../components/HeaderComponent.vue';

export default {
  name: 'PagosView',
  components: {
    HeaderComponent
  },
  data() {
    return {
      cardNumber: '',
      expDate: '',
      cvv: '',
      paymentComplete: false,
      maskedCardNumber: '' // Nuevo dato para almacenar el número de tarjeta enmascarado
    };
  },
  methods: {
    processPayment() {
      // Simulación del proceso de pago
      setTimeout(() => {
        this.paymentComplete = true;
        Swal.fire({
          title: '¡Pago exitoso!',
          text: 'Tu pago ha sido completado.',
          icon: 'success',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#43d5e8',
        }).then(() => {
          // se cierra la alerta y se redirecciona a la otra vista
          router.push('/home'); // redireccion pagina home
        });
      }, 300);
    },
    encryptCardNumber() {
      // Enmascarar y quedan libres 4 numeros
      const lastFourDigits = this.cardNumber.slice(-4);
      this.maskedCardNumber = '**** **** **** ' + lastFourDigits;
    }
  }
};
</script>


<style scoped>
/* estilos css*/
.cvv {
  margin-left: 70px;
}
.pagos {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #a0dfdf;
}
.botonpagar {
  margin-top: 35px;
  border-radius: 13px;
  background-color: #43d5e8;
  cursor: pointer;
}
.datos {
  margin-top: 20px;
  background-color: #b4b7b958;
  padding: 10px;
  border-radius: 10px;
}
</style>

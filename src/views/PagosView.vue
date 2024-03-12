<template>
  <div>
    <h1>Pasarela de Pago</h1>
    <div v-if="!paymentComplete">
      <form @submit.prevent="processPayment">
        <!-- Campos de entrada de la información del usuario -->
        <div class="pagos">
          <div>
            <label>Número de Tarjeta:</label>
            <input type="text" v-model="cardNumber" placeholder="Número de Tarjeta">
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
          <button class="botonpagar  " type="submit">Pagar</button>
        </div>
      </form>

      <!-- Sección para mostrar lo que se está escribiendo en tiempo real -->
      <div class="datos">
        <h2>Datos pago</h2>
        <br>
        <p>Número de Tarjeta: {{ cardNumber }}</p>
        <br>
        <p>Fecha de Expiración: {{ expDate }}</p>
        <br>
        <p>CVV: {{ cvv }}</p>
      </div>
    </div>
    <div v-else>
      <strong>listo tu pago, revisa tu correo.</strong>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      cardNumber: '',
      expDate: '',
      cvv: '',
      paymentComplete: false
    };
  },
  methods: {
    processPayment() {
      // Simulación del proceso de pago
      setTimeout(() => {
        this.paymentComplete = true;
        Swal.fire({
          title: '¡pago exitoso!',
          text: 'tu pago fue completado',
          icon: 'success',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#43d5e8',
        });
      }, 300);
    }
  }
};
</script>

<style scoped>
/* Estilos CSS para la vista */
.cvv{
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
  background-color: #e4e3e358;
  padding: 10px;
  border-radius: 10px;
}
</style>

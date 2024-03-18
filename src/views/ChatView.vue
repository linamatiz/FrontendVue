<template>
  <HeaderComponent></HeaderComponent>
  <div id="chatbot-container" class="smoky-bg">
    <div v-for="(message, index) in messages" :key="index" class="message-container">
      <p :class="{ 'user-message': message.sender === 'user', 'bot-message': message.sender === 'bot' }">
        {{ message.text }}
      </p>
    </div>
    <input class="input" type="text" v-model="inputText" @keyup.enter="sendMessage" placeholder="Escribe un mensaje..." />
  </div>
  
</template>

<script>
import HeaderComponent from './../components/HeaderComponent.vue';


export default {
  name: 'ChatView',
  components: {
    HeaderComponent
  },
  data() {
    return {
      inputText: '',
      messages: [],
    };
  },
  methods: {
    sendMessage() {
      // Agrega el mensaje del usuario
      this.messages.push({ sender: 'user', text: this.inputText });
      // Limpia el cuadro de texto
      this.inputText = '';

      // Simula una respuesta del chatbot después de un breve retraso
      setTimeout(() => {
        const response = this.generateResponse();
        this.messages.push({ sender: 'bot', text: response });
      }, 500);
    },
    generateResponse() {
      // Respuestas predefinidas del chatbot
      const responses = {
        'hola': 'hola Escoge una opción:\n1. Numero corporativo\n2. Editar perfil\n3. Productos disponibles\n4. Quiénes somos\n5. Asesor',
        'gracias': 'en compraventa nos complace atenderte, chat cerrado',
        '1': '200203023',
        '2': '¡Dirígete a la sección "Editar Perfil" que se encuentra en la página de inicio!',
        '4': '¡Software para la gestión de ventas de celulares!',
        '5': 'Dirígete a nuestro correo compraventa@celu.com',
        '3': 'si claro, que marcas quieres saber (samsung, iphone, motorola?)',
        'samsung': 'disponibilidad samsung m12, samsung s3',
        'iphone': 'iphone 14, 7+, x, 8+',
        'motorola': 'morola e32, motorola one fusion',
        // si no coincide con la pregunta automatizada, el mensaje por defecto será:
        'default': 'Te invitamos a revisar la página de inicio para ver nuestros productos disponibles'
      };

      // Normaliza el texto de la pregunta del usuario
      const normalizedInput = this.messages[this.messages.length - 1].text.toLowerCase().trim();

      // Busca una coincidencia en las preguntas predefinidas
      for (const question in responses) {
        if (normalizedInput.includes(question.toLowerCase())) {
          // Si se encuentra una coincidencia, devuelve la respuesta correspondiente
          return responses[question];
        }
      }

      // Si no se encuentra una coincidencia, devuelve la respuesta predeterminada
      return responses['default'];
    }
  }
}
</script>

<style scoped>
#chatbot-container {
  background-color: #747576;
  margin:  auto;
  width: 400px;
  max-height: 400px;
  border: 10px solid hsl(177, 52%, 68%);
  border-radius: 50px;
  overflow-y: auto;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(150, 15, 15, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.message-container {
  margin-bottom: 10px;
  overflow: hidden;
  margin-left: auto;
}

.user-message {
  background-color: #33d5e3;
  color: #fff;
  text-align: right;
  padding: 10px 15px;
  border-radius: 20px;
}

.bot-message {
  background-color: #e988ff;
  color: #fff;
  text-align: left;
  padding: 10px 15px;
  border-radius: 20px;
}

.input {
  width: 100%; /*  ancho del contenedor */
  height: 40px; /* ajuste de la altura */
  font-size: 16px; /* ajuste del tamaño */
}

.smoky-bg {
  background-color: #b1b1b1; /* color de fondo  */
}

</style>

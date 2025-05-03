// services/MessageService.js
import { ref } from 'vue';
import gsap from 'gsap';

class MessageService {
  constructor() {
    this.messageText = ref('');
    this.messageType = ref('success');
    this.isVisible = ref(false);
  }

  showMessage(text, type = 'success', duration = 3000) {
    this.messageText.value = text;
    this.messageType.value = type;
    this.isVisible.value = true;

    // Animation d'affichage
    gsap.to('.message', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
      onComplete: () => {
        setTimeout(() => {
          this.hideMessage();
        }, duration);
      },
    });
  }

  hideMessage() {
    gsap.to('.message', {
      opacity: 0,
      y: -10,
      duration: 0.5,
      onComplete: () => {
        this.isVisible.value = false;
      },
    });
  }

  getMessageClass() {
    return this.messageType.value === 'success' ? 'bg-green-600' : 'bg-red-600';
  }
}

export default new MessageService();

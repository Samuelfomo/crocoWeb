<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-blue-300 flex items-center justify-center p-4">
    <div class="bg-white shadow-xl rounded-xl w-full max-w-md p-6">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold text-green-600">CROCO+</h1>
        <p class="text-gray-600 mt-2">Connectez-vous à votre compte</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <Input
          id="code"
          v-model="entry.code"
          label="Code"
          placeholder="Entrez votre code"
          :type="'text'"
        />
        <p v-if="errors.code" class="text-red-500 text-sm">{{ errors.code }}</p>

        <Input
          id="pin"
          v-model="entry.pin"
          label="PIN"
          placeholder="Entrez votre PIN"
          :type="'password'"
        />
        <p v-if="errors.pin" class="text-red-500 text-sm">{{ errors.pin }}</p>

        <div class="flex justify-end">
          <a href="#" class="text-sm text-green-600 hover:underline">Mot de passe oublié ?</a>
        </div>

        <button
          type="submit"
          class="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700
                 transition duration-300 flex items-center justify-center"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting" class="mr-2">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
          {{ isSubmitting ? 'Connexion en cours...' : 'Connexion' }}
        </button>
      </form>

      <div class="text-center mt-4">
        <p class="text-sm text-gray-600">
          Pas de compte ?
          <a href="#" class="text-green-600 hover:underline">Créer un compte</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Input from './input.vue'
import Login from '@/class/Login'

const router = useRouter()
const isSubmitting = ref(false)

const entry = ref({
  code: '',
  pin: ''
})

const errors = ref({
  code: '',
  pin: ''
})

const validateData = () => {
  let isValid = true
  errors.value = { code: '', pin: '' }

  if (entry.value.pin.length !== 4) {
    errors.value.pin = 'Veuillez saisir votre code PIN complet'
    isValid = false
  }

  if (entry.value.code.length !== 6) {
    errors.value.code = 'Veuillez saisir votre code complet'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateData()) return

  isSubmitting.value = true
  try {
    const submit = await Login.auth(entry.value.code, entry.value.pin)

    if (!submit) {
      errors.value.pin = 'Authentification échouée, réessayez'
      return false
    }

    await router.push('/home')
  } catch (error) {
    console.error('Erreur lors de la connexion:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

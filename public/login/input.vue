<template>
  <div class="floating-label-group">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :maxlength="maxlength"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="floating-label-input"
      :class="{ 'not-empty': modelValue }"
    />
    <label :for="id" class="floating-label">{{ label }}</label>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  type: {
    type: String,
    default: 'text'
  },
  label: String,
  placeholder: String,
  modelValue: [String, Number],
  maxlength: [String, Number]
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.floating-label-group {
  @apply relative w-full;
}

.floating-label-input {
  @apply w-full focus:outline-none focus:border-none
  focus:ring-2 focus:ring-white transition duration-300
  placeholder-transparent;
}

.floating-label {
  @apply absolute left-0 top-1/2 -translate-y-1/2
  text-gray-600 transition-all duration-300
  pointer-events-none;
}

.floating-label-input:focus + .floating-label,
.floating-label-input.not-empty + .floating-label {
  @apply text-base text-gray-500 -top-2
  bg-white -translate-y-1/2;
}
</style>

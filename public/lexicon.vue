<template>
  <div class="w-full h-64 flex items-center justify-center">
    <svg
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      class="w-52 h-28"
      ref="infinitySVG"
    >
      <!-- Infinity path -->
      <path
        id="infinityPath"
        d="M 30 50 C 30 20, 80 20, 100 50 C 120 80, 170 80, 170 50 C 170 20, 120 20, 100 50 C 80 80, 30 80, 30 50 Z"
        fill="none"
        stroke="#d1d5db"
        stroke-width="2"
      />

      <!-- Bubble (animated) -->
      <circle
        ref="bubble"
        r="6"
        fill="url(#grad)"
      />

      <!-- Gradient fill -->
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f97316" />
          <stop offset="100%" stop-color="#000000" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const bubble = ref(null)
const infinitySVG = ref(null)

onMounted(() => {
  gsap.to(bubble.value, {
    duration: 4,
    repeat: -1,
    ease: 'linear',
    motionPath: {
      path: '#infinityPath',
      align: '#infinityPath',
      autoRotate: false,
      alignOrigin: [0.5, 0.5]
    },
    onUpdate() {
      const pos = bubble.value.getBoundingClientRect()
      const centerX = window.innerWidth / 2
      const diff = Math.abs(pos.x - centerX)
      const scale = 1 + (1 - Math.min(diff / 100, 1)) * 0.3
      infinitySVG.value.style.transform = `scaleX(${scale})`
    }
  })
})
</script>

<style scoped>
svg {
  overflow: visible;
}
</style>

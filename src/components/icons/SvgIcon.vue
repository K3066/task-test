<script setup>
defineProps({
  icon: {
    type: String,
  },
  viewBox: {
    type: String,
    default: '0 0 20 20'
  },
  height: {
    type: String,
    default: '20'
  },
  width: {
    type: String,
    default: '20'
  }
})
</script>

<template>
  <svg :viewBox="viewBox"
       :height="height"
       :width="width">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

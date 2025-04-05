<script setup>
import {defineProps} from 'vue'
import SvgIcon from "@/components/icons/SvgIcon.vue";
defineProps({
  name: {
    type: String,
  },
  icon: {
    type: String,
  },
  secondary: {
    type: Boolean,
  },
  viewBox: {
    type: String,
  },
  tertiary: {
    type: Boolean,
  }
})
</script>

<template>
  <div class="base-button"
       :class="{
         secondary: secondary,
         tertiary: tertiary,
         'without-text': !name
       }"
  >
    <svg-icon v-if="icon"
              class="base-button--icon"
              v-bind="$props" />
    <span>{{name}}</span>
  </div>
</template>

<style scoped lang="sass">
.base-button
  height: 38px
  width: fit-content
  color: $white-text
  background: $accent-color
  border-radius: $global-radius
  display: flex
  align-items: center
  padding: 0 10px
  gap: 4px
  cursor: pointer
  &--icon
    fill: $white-text
  &:hover
    background: $accent-color-hover
.without-text
  gap: 0
.secondary
  color: $primary-text-color
  background: $light-gray
  .base-button--icon
    fill: $primary-text-color
  &:hover
    background: $gray
.tertiary
  height: fit-content
  padding: 0
  color: $muted-color
  background: none
  .base-button--icon
    fill: $muted-color
  &:hover
    background: $light-gray
</style>

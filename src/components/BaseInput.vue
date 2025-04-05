<script setup>
import {defineProps} from 'vue'


defineProps({
  inputName: {
    type: String,
  },
  placeholder: {
    type: String,
    default: "Подсказка"
  },
  signature: {
    type: String,
  },
  modelValue: {
    type: String,
  }
})

</script>

<template>
  <div class="base-input">
    <span class="base-input__label">{{inputName}}</span>
    <div class="base-input--input-zone">
      <input :value="modelValue"
             class="base-input__input"
             type="text"
             :placeholder="placeholder"
             @input="$emit('update:modelValue', $event.target.value)">
      <span class="base-input__signature">{{signature}}</span>
    </div>
  </div>
</template>

<style scoped lang="sass">
.base-input
  display: flex
  flex-direction: column
  gap: 8px
  &--input-zone
    display: flex
    flex-direction: column
    gap: 4px
  &__label
    height: 17px
  &__input
    height: 50px
    padding: 0 20px
    background: $background-color
    border: 1px solid $border-color
    border-radius: $global-radius
    &:focus
      outline: none
      border-color: $accent-color
    &::placeholder
      color: $tertiary-text-color
  &__signature
    font-size: 12px
    color: $tertiary-text-color

</style>

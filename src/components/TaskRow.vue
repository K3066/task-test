<script setup>
import {defineProps} from 'vue'
import BaseButton from "@/components/BaseButton.vue";

defineProps({
  title: {
    type: String,
  },
  number: {
    type: Number,
  },
  isBug: {
    type: Boolean,
  }
})
</script>

<template>
  <div class="task-row"
       :class="{'bug' : isBug}">
    <div class="task-row--title">
      <span class="task-row--title__number">
        # {{ number }}
      </span>
      <span class="task-row--title__name">
        {{`  ${title}`}}
      </span>
    </div>
    <div class="task-row--buttons">
      <base-button icon="ChangeIcon"
                   tertiary
                   @click="$emit('editClick')" />
      <base-button icon="TrashIcon"
                   tertiary
                   @click="$emit('removeClick')"/>
    </div>
  </div>
</template>

<style scoped lang="sass">
.task-row
  display: flex
  min-height: 52px
  justify-content: space-between
  align-items: center
  .task-row--title
    gap: 4px
    &__number
      color: $muted-text-color
      font-weight: 600
  .task-row--buttons
    display: flex
    gap: 4px
  &:not(:last-child)
    border-bottom: 1px solid $border-color
.bug
  .task-row--title__number
    color: $light-red-color
</style>

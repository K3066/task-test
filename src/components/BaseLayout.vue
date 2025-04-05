<template>
  <div class="base-layout">
    <div v-if="$slots.main"
         class="main">
      <slot name="main" />
    </div>
    <div v-if="$slots.footer"
         class="footer" >
      <slot name="footer" />
    </div>
    <div v-if="$slots['split-footer']"
         class="split-footer">
      <slot name="split-footer" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.base-layout
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%
  .footer
    display: flex
    justify-content: center
  .split-footer
    display: flex
    flex-direction: row
    justify-content: space-between
</style>

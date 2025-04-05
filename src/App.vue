<script setup>
import LogoComponent from "@/components/LogoComponent.vue";
import SvgHolder from "@/components/icons/SvgHolder.vue";

</script>

<template>
  <svg-holder style="display: none"/>
  <div class="wrapper">
    <logo-component logo-text="Задачник" />
    <router-view class="folder"/>
  </div>
</template>

<style scoped lang="sass">
.wrapper
  display: flex
  flex-direction: column
  width: 400px
  height: 666px
  padding: 57px 0 67px 0
  gap: 66px
  border-radius: $global-radius
.folder
  height: 100%
</style>

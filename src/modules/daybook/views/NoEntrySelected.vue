<template>
  <div class="d-flex justify-content-center align-items-center">
    <h1 class="align-left-center" >No hay nada seleccionado</h1>
  </div>
  <FaButton/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: {
    FaButton: defineAsyncComponent(() => import('@/modules/daybook/components/FaButton.vue'))
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}

</style>
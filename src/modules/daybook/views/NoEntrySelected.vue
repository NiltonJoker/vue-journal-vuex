<template>
  <div class="d-flex justify-content-center align-items-center">
    <h1 class="align-left-center">No hay nada seleccionado</h1>
  </div>
  <FaButton @on:click="createNewEntry" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    FaButton: defineAsyncComponent(() =>
      import("@/modules/daybook/components/FaButton.vue")
    ),
  },
  methods: {
    createNewEntry() {
      this.$router.push({
        name: "entry",
        params: { id: "new" },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
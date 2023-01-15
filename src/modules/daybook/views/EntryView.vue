<template class="entry-title">
  <div class="entry-title d-flex justify-content-between p-2">
    <div class="">
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Enero</span>
      <span class="mx-2 fs-4 fw-light">2023, domingo</span>
    </div>

    <div class="">
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subit foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que sucedio hoy ?"></textarea>
  </div>

  <FaButton icon="fa-save" />

  <img src="https://preview.redd.it/new-resident-evil-4-remake-photo-v0-ib5ru2n2us1a1.jpg?auto=webp&s=4f89b0884bce752c2faebbf28c5c68c170072636" class="img-thumbnail" alt="entry-picture">
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    FaButton: defineAsyncComponent(() => import("@/modules/daybook/components/FaButton.vue")),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus{
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
<template>
  <div v-if="isShowLoader" class="loader-wrap">
    <BSpinner type="grow" variant="light" label="Loading..." />
    <BSpinner type="grow" variant="light" label="Loading..." />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters(["isShowLoader"])
  }
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
</style>

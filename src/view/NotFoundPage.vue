<template>
  <div class="not-found">
    <h1 class="not-found__title">Page not found. Error 404...</h1>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage"
};
</script>

<style scoped>
.not-found {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    45deg,
    rgb(0, 3, 38) 0%,
    rgb(82, 15, 117) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found__title {
  font-size: 60px;
  color: #fff;
}
</style>

<template>
  <div class="error">
    <img class="img-404" src="../assets/404.png" alt="404 not found" />
    <div class="button">
      <NuxtLink to="/">Voltar para Home</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error-layout',
  layout: 'error-layout',
}
</script>

<style scope>
.error {
  display: flex;
  width: 100%;
  height: 100%;
}

.img-404 {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.button {
  display: flex;
  position: absolute;
  z-index: 1;
  right: 0;
  margin-right: 20rem;
  margin-top: 15rem;
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: 10px 5px 5px rgb(50, 134, 69);
}

.button a {
  text-decoration: none;
  color: #fff;
}
</style>
<template>
  <header class="logo">
    <div class="logo-esquerda">
      <NuxtLink to="/">
        <img src="../assets/logo-branca.png" alt="" />
      </NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scope>
.logo {
  width: 100%;
  height: 100px;
  background-color: rgb(50, 49, 50);
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.logo-esquerda {
  margin-left: 15px;
}

@media (max-width: 540px) {
  .logo-esquerda {
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
  }
}
</style>
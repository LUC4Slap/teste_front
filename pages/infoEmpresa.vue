<template>
  <div class="main">
    <Header />
    <h1>Sober a Empresa</h1>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: { Header },
  data() {
    return {
      user: this.$store.state.data.teste,
    }
  },
}
</script>

<style scoped>
.main {
  height: 100vh;
  background-image: url('../assets/background2.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}
.main h1 {
  color: #fff;
}
</style>
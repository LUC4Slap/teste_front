<template>
  <div class="main">
    <Header />
    <p>Empresa</p>
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
  created() {
    // mounted() {
    // const id = this.$route.params.id
    // console.log(this.$route.params)
    // console.log(this.$router.options.routes[0])
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
</style>
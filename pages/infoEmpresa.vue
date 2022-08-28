<template>
  <div class="main">
    <Header />
    <h1>Sober a Empresa</h1>
    <div class="card">
      <Card :user="user" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Card from '../components/CardUser.vue'
export default {
  components: { Header, Card },
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main h1 {
  color: #fff;
}
.card {
  /* background-color: #fff; */
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 8px;
}
</style>
<template>
  <div class="main">
    <Header />
    <vue-good-table
      :columns="columns"
      :rows="rows"
      theme="nocturnal"
      :search-options="{
        enabled: true,
      }"
      @on-cell-click="onRowDoubleClick"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
export default {
  name: 'IndexPage',
  components: {
    Header,
  },
  data() {
    return {
      columns: this.$store.state.data.columns,
      rows: [],
      result: '',
    }
  },
  async created() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    for (const item of data) {
      const parser = {
        id: item.id,
        name: item.name,
        username: item.username,
        email: item.email,
        phone: item.phone,
        website: item.website,
        company: item.company.name,
        address: `${item.address.street} - ${item.address.suite}`,
      }
      this.rows.push(parser)
    }
    this.result = data
    this.$store.commit('data/ADD_RESULT', data)
  },
  methods: {
    async onRowDoubleClick(params) {
      await this.setarUsuario(params)
      this.$router.push({
        name: 'infoEmpresa',
      })
    },
    async setarUsuario(params) {
      // eslint-disable-next-line eqeqeq
      const user = this.result.find((item) => item.id == params.row.id)
      // alert(JSON.stringify(user, null, 2))
      await this.$store.commit('data/SET_USER', user)
    },
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

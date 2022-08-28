<template>
  <div class="main">
    <Header />
    <vue-good-table
      :columns="columns"
      :rows="rows"
      theme="nocturnal"
      @on-cell-click="onRowDoubleClick"
    />
  </div>
</template>

<script>
import axios from 'axios'
// import { mapState } from 'vuex'
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
      results: [],
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
    this.results.push(data)
  },
  methods: {
    onRowDoubleClick(params) {
      alert(JSON.stringify(params, null, 2))
    },
  },
}
</script>

<style scoped>
.main {
  background-image: url('../assets/background2.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

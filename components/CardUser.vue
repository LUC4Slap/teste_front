<template>
  <div class="card">
    <p>Nome: {{ user.name }}</p>
    <hr />
    <p>E-mail: {{ user.email }}</p>
    <hr />
    <p>Rua: {{ user.address.street }}</p>
    <hr />
    <p>
      Site:
      <a :href="urlSite" target="_blank">
        <strong>{{ user.website }}</strong>
      </a>
    </p>
    <hr />
    <p style="margin-top: 5px">
      Descrição da empresa: {{ user.company.catchPhrase }}
    </p>
    <hr />
    <p>Telefone: {{ user.phone }}</p>
    <hr />
    <div class="company-bs">
      <p>Categorias Empresa</p>
      <ul v-for="(bs, index) in formatBsCompany" :key="index">
        <li>{{ bs }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      tela:
        window.screen.width <= 500 ? 'display: none' : 'display: inline-block',
      urlSite: `http://${this.user.website}`,
    }
  },
  computed: {
    formatBsCompany() {
      const bs = this.user.company.bs.split(' ')
      return bs
    },
  },
}
</script>

<style scoped>
.card {
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  width: 90%;
  transition: all 0.3s ease-out;
  background-color: rgb(16, 16, 16);
  display: flex;
  flex-direction: column;
}
.card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

.card p {
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 15px;
}

.card p a {
  text-decoration: none;
  color: #fff;
  transition: 0.8s ease-in-out;
}

.card p a:hover {
  color: rgb(40, 193, 114);
  transition: 0.8s ease-in-out;
}

.company-bs ul {
  list-style: none;
  color: #fff;
}
</style>
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
    <!-- <div class="map" :style="tela">
      <iframe
        :src="urlMap"
        width="600"
        height="350"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div> -->
    <p style="margin-top: 5px">
      Descrição da empresa: {{ user.company.catchPhrase }}
    </p>
    <hr />
    <p>Telefone: {{ user.phone }}</p>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      urlMap: `https://www.google.com.br/maps/place/37%C2%B018'57.2%22S+81%C2%B008'58.6%22E/@${this.user.address.geo.lat},${this.user.address.geo.lng},17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x39e931c3f0a55e62!8m2!3d-37.3159!4d81.1496`,
      // urlMap: 'https://goo.gl/maps/nrCbNSJ99YFNrcA48',
      tela:
        window.screen.width <= 500 ? 'display: none' : 'display: inline-block',
      urlSite: `http://${this.user.website}`,
    }
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
  background-color: rgb(222, 214, 214);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
.card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

.card p {
  /* color: #a3a5ae; */
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
</style>
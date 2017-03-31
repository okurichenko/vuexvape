<template>
  <div class="hello">
    <button v-if="user" @click="logout">Logout</button>
    <ul v-for="aroma in aromas">
      <li>{{aroma.name}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import firebaseApp from '@/store/firebase';

  export default {
    name: 'hello',
    computed: {
      ...mapState(['user']),
      aromas() {
        return this.$store.state.aromas;
      },
    },
    methods: {
      logout() {
        firebaseApp.auth().signOut();
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

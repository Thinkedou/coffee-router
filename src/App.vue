<template>
  <div id="app">
      <!-- composant non dépendant de la nav -->
      <CoffeeNav />

      <!-- contenu principal qui va changé en fct de la nav -->
      <router-view />

      <!-- composant non dépendant de la nav -->
     <CoffeeFooter />

  </div>
</template>

<script>
import CoffeeNav    from '@/components/CoffeeNav'
import CoffeeFooter from '@/components/CoffeeFooter'

export default {
  name: 'App',
  props: {  },
  components:{
      CoffeeNav,
      CoffeeFooter
  }
}
</script>







<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

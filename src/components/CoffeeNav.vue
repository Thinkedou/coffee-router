<template>
    <div>
        <h1 class="site-heading text-center text-white d-none d-lg-block">
          <span class="site-heading-upper text-primary mb-3">Un Theme bootstrap pas du tout volé  (◔◡◔✿)</span>
          <span class="site-heading-lower">Business Casuale</span>
        </h1>
        <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item active px-lg-4">
                  <router-link class="nav-link text-uppercase text-expanded" :to="{ name: 'Home' }">Home</router-link>
                </li>
                <li class="nav-item px-lg-4">
                    <router-link class="nav-link text-uppercase text-expanded router-link-exact-path-active" :to="{ name: 'About' }">About</router-link>
                </li>
                <li class="nav-item px-lg-4">
                  <router-link class="nav-link text-uppercase text-expanded" :to="{ name: 'products' }">Products</router-link>
                </li>
                <li class="nav-item px-lg-4">
                  <router-link class="nav-link text-uppercase text-expanded" :to="{ name: 'Store' }">Store</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'CoffeeNav'
}
</script>
<style scoped>

     li a .router-link-exact-path-active {
        color: #e6a756;
    }

</style>

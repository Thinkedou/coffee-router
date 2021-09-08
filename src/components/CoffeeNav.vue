<template>
    <div>
        <h1 class="site-heading text-center text-white d-none d-lg-block">
          <span class="site-heading-upper text-primary mb-3">Un Theme bootstrap pas du tout volé  (◔◡◔✿)</span>
          <span class="site-heading-lower">Business Casual</span>
        </h1>
        <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
          <div class="container">
            <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Coffee Router</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item active px-lg-4">
                  <router-link class="nav-link text-uppercase text-expanded" to="/">Home</router-link>
                </li>
                <li class="nav-item px-lg-4">
                    <router-link class="nav-link text-uppercase text-expanded" to="about">About</router-link>
                </li>
                <li class="nav-item px-lg-4">
                  <router-link class="nav-link text-uppercase text-expanded" to="products">Products</router-link>
                </li>
                <li class="nav-item px-lg-4">
                  <router-link class="nav-link text-uppercase text-expanded" to="store">Store</router-link>
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

<template>
   <section class="page-section">
     <div class="container">

         <div class="jumbotron jumbotron-fluid">
           <div class="container">
             <h1 class="display-4">UN CAFE EN PARTICULIER</h1>
             <p class="lead">{{ $route.params.prodId }}</p>
           </div>
         </div>

     </div>
   </section>
</template>

<script>


export default {
  name: 'CoffeeProductDetails',
  props: {

  },
  data:()=>({
      productId:0
  }),
  created(){
      console.log(this.$route);
  }
}
</script>

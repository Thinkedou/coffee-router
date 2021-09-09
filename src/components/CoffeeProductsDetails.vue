<template>
    <div class="text-center">

        <section class="page-section">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="jumbotron jumbotron-fluid">
                        <img :src="currentCoffee.images[0]" style="height:250px" alt="">
                    </div>
                </div>
                <div class="col-6">
                    <div class="jumbotron jumbotron-fluid">
                        <h5>{{currentCoffee.titre}}</h5>
                        <ul class="list-group">
                            <li class="list-group-item">{{currentCoffee.marque}}</li>
                            <li class="list-group-item">{{currentCoffee.prix}} €</li>
                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
      </section>

    </div>
</template>

<script>

import {coffee} from '@/assets/js/Coffee'


export default {
  name: 'CoffeeProductsDetails',
  data:()=>({
      localCoffee:coffee,
      currentCoffee:{},
  }),
  methods:{

  },
  created(){
      // const coffeeId = this.$route.params.coffeeId
      this.currentCoffee = this.localCoffee.find(caf=>caf.id==this.$route.params.coffeeId);
      // console.log('JE CHARGE LE ',coffeeId)
  }
}
</script>

<template>
    <div class="text-center">

        <section class="page-section">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="jumbotron jumbotron-fluid">
                        <img :src="coffeurl" style="height:250px" alt="">
                    </div>
                </div>
                <div class="col-6">
                    <div class="jumbotron jumbotron-fluid">
                        <h5>Titre</h5>
                        <ul class="list-group">
                            <li class="list-group-item">marque</li>
                            <li class="list-group-item">prix €</li>
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

  }),
  methods:{

  },
  created(){

  }
}
</script>

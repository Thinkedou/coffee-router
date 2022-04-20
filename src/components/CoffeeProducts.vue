<template>
    <section class="page-section">
      <div class="container">

          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Notre offre de cafés</h1>
              <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Marque</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                  <tr  >
                        <th scope="row">id</th>
                        <td>marque</td>
                        <td>titre</td>
                        <td>prix</td>
                        <td><button type="button" class="btn btn-secondary btn-sm">voir</button></td>
                  </tr>
                </tbody>
                </table>
            </div>
          </div>

      </div>
    </section>
</template>

<script>

import {coffee} from '@/assets/js/Coffee'


export default {
  name: 'CoffeeProducts',
  data:()=>({
  }),
  filters:{

  },
  methods:{

  }
}
</script>

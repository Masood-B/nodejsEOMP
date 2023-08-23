<template>
  <div class="about">
    <Navbar/>

    <h2 style="color: black">bruhhhhhhhhhhhhh</h2>
    <div class="table-responsive" style="margin-top: 1rem">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product.prodID">
          <tr>
            <th scope="row">{{ product.prodID }}</th>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.Category }}</td>
            <td>
              <img
                :src="product.prodUrl"
                :alt="product.prodName"
                style="width: 5rem"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  <script>
  import Navbar from '@/components/Navbar.vue'

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  components:{
     Navbar,
    
    //  HeaderComp
   }
};
</script>


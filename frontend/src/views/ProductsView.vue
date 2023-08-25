<template>
  <div>
    <Navbar />

    <div class="my-5 container">
      <h1 style="color: rgb(228, 220, 220)">Find Movies<span></span></h1>
      <br />
      <br />

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          style="width: 10rem"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter Products
        </button>
        <div class="dropdown-menu" style="background-color: black">
          <div class="pricesortbtn">
            <button class="btn" style="width: 100%" id="pricesortbtn">
              Sort by Price
            </button>
          </div>
          <div class="namesortbtn">
            <button
              class="btn"
              style="width: 100%; margin-top: 1rem"
              id="namesortbtn"
            >
              Sort by Name
            </button>
          </div>
        </div>
      </div>
      <div class="row" style="margin-top: 3rem" v-if="products">
        
        <div  class="car col-12 col-sm-6 col-md-4 p-2"
          v-for="product in products"
          :key="product.prodID"
          style="width: 17rem; margin-inline: 4rem; margin-bottom: 1rem"
        >
          <img :src="product.prodUrl" class="w-100 test" alt="" />
          <div class="card-body" style="margin-right 13rem;">
            <br />
            <h5 class="card-title" style="color: white">
              {{ product.prodName }}
            </h5>
            <h5 class="card-title">{{ product.Category }}</h5>
            <br />
            <p class="card-text">R {{ product.amount }}</p>
            <p class="card-text">Qty: {{ product.quantity }}</p>
            <router-link
              :to="{
                name: 'singleProduct',
                params: { id: product.prodID },
                query: {
                  prodName: product.prodName,
                  Category: product.Category,
                  img: product.prodUrl,
                  amount: product.amount,
                  quantity: product.quantity,
                },
              }"
              ><button class="btn btn-outline-light">
                View More
              </button></router-link
            >
          </div>
        </div>
      </div>
      <div class="else" v-else>
        <Spinner/>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import Spinner from '@/components/Spinner.vue'

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  components: {
    Navbar,
    Spinner

    //  HeaderComp
  },
  methods: {
    goToProduct() {
      this.$router.push({
        name: this.name,
        params: this.params.id,
        query: this.query.name,
      });
    },
  },
};
</script>
<style scoped>
* {
  color: black;
}
h1 {
  font-family: "DM Serif Display", serif;
}
h5 {
  font-family: "DM Serif Display", serif;
}
.car {
  border: 3px solid black;
  background-color: white;
  justify-content: space-between;
}
.btn {
  color: white;
  background: black;
}
.btn:hover {
  color: #946e52;
  background-color: white;
}
.card-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
.car:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.car {
  border-radius: 4px;
  box-shadow: 0 6px 10px rgba(119, 34, 34, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}

.div {
  padding: 4rem;
  margin-inline: 1rem;
  border-radius: 10px;
  position: relative;
  bottom: 5rem;
}
.custom-img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
.custom-img:hover {
  object-fit: contain;
}
.side-text {
  font-size: 7rem;
  color: white;
  transform: rotate(-90deg);
  position: relative;
  right: 40rem;
  bottom: 5rem;
  font-weight: 200;
}
.test {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
.card {
  background-color: rgb(79, 79, 79);
}
</style>

<!-- something need to change -->










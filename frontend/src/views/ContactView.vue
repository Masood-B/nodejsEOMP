<template>
  <div class="body">
    <Navbar />
    <form action="https://formspree.io/f/meqbglnp" method="POST">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style="p-4 w-75 text-center border-5 rounded-4 fs-5 border-radius:2px solid black;"
          placeholder=""
          name="emailAdd"
          minlength="3"
          maxlength="20"
          required
          oninvalid="this.setCustomValidity('Please enter your Email Address')"
          oninput="this.setCustomValidity('')">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Username</label>
          <input type="username" class="form-control" id="exampleInputUsername" style="p-4 w-75 text-center border-5 rounded-4 fs-5"
          placeholder=""
          name="name"
          minlength="3"
          maxlength="20"
          required
          oninvalid="this.setCustomValidity('Please enter your Username')"
          oninput="this.setCustomValidity('')">
        </div>
        <div class="mb-3" style="p-4 w-75 text-center border-5 rounded-4 fs-5;">
                 <textarea class="form-control w-100"  rows="9" id="message" placeholder="REASON OF INTEREST" name="message" value="" required></textarea>
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
      </form>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default{
   components:{
     Navbar,
    
    //  HeaderComp
   }
  }
</script>

<style scoped>

  form {
    width: 70%;
    margin-inline: 5rem;
  }
</style>
<template>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addFormUser" class="d-flex flex-column gap-5">
            <!-- <input type="text" v-model="userData.userID" placeholder="id" name="" id=""> -->
            <input type="text" v-model="userData.firstName" placeholder="name" name="" id="">
            <input type="text" v-model="userData.lastName" placeholder="surname" name="" id="">
            <input type="text" v-model="userData.userAge" placeholder="age" name="" id="">
            <input type="text" v-model="userData.userRole" placeholder="role" name="" id="">
            <input type="text" v-model="userData.emailAdd" placeholder="email" name="" id="">
            <input type="text" v-model="userData.userPass" placeholder="password" name="" id="">
            <input type="text" v-model="userData.userProfile" placeholder="image" name="" id="">
            <button type="submit" class="btn">Add</button>
           </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                userData:{
                firstName: "",
                lastName : "",
                userAge: "",
                Gender: "",
                userRole: "",
                emailAdd: "",
                userPass: "", 
                userProfile:""

            }
    }
  },
  methods:{
           addFormUser(){
            this.$store.dispatch('addUser', this.userData)
            console.log(this.userData);
          }
        }
    }
</script>
<style scoped>
* {
    margin:0;
    padding:0;
    font-family: 'Arvo';
    /* background-color: #000; */
    color: rgb(7, 7, 7);
    font-size: medium;

  }
</style>








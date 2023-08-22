<template>
  <div>
    <Navbar/>
    <!-- <HeaderComp/> -->
    <router-view/>
   </div>

 </template>
 <script>
 import Navbar from '@/components/Navbar.vue'
 import Footer from '@/components/Footer.vue'
 import Carousel from '@/components/Carousel.vue'

//  import HeaderComp from '@/components/HeaderComp.vue'
 
 export default{
   components:{
     Navbar,
     Footer,
     Carousel
    //  HeaderComp
   }
 }
 
 </script>
 
 <style>
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #090909;
   background-color: #000;
  
 }
 
 nav {
   padding: 30px;
 }
 
 
 .front{
  height: 20%;
}
 




 </style>
 


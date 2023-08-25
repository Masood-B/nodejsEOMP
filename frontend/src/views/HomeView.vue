<template>
 

  <div
    
  >
   
    

    <Navbar/>


    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://i.postimg.cc/vTDtDVBK/pexels-andre-moura-3151392.jpg" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h1 style="color:rgb(239, 8, 8)">Watch Horror Movies And TV Shows</h1>
            <h3>Buy your favorite films at affordable prices</h3>
            <div class="slider-btn">
              <button class="btn btn-1">watch Now</button>
              <button class="btn btn-2"> Sign Up</button>

            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://i.postimg.cc/LsL9KC3C/pexels-jeshootscom-1040159.jpg" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h1 style="color:rgb(239, 8, 8)"></h1>
            <h3>Buy your favorite films at affordable prices</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/LsL9KC3C/pexels-jeshootscom-1040159.jpg" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h1 style="color:rgb(239, 8, 8)">Watch Horror Movies And TV Shows</h1>
            <h3>Buy your favorite films at affordable prices</h3>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  
  
  
  
  
  
  
  
  
<div class="image-row">
  
  <img src="https://i.postimg.cc/bwmWLfc1/Screenshot-2023-08-22-083546.png" alt="Image 1">
  <img src="https://i.postimg.cc/bwmWLfc1/Screenshot-2023-08-22-083546.png" alt="Image 2">
  <img src="https://i.postimg.cc/bwmWLfc1/Screenshot-2023-08-22-083546.png" alt="Image 3">
  <img src="https://i.postimg.cc/bwmWLfc1/Screenshot-2023-08-22-083546.png" alt="Image 2">

  
</div> 
  
  
















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
<style>
/*
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Righteous&display=swap');
*{
font-family: 'Merriweather', serif;
font-family: 'Righteous', cursive;
}*/
/*.body {
  position: absolute;
  background-image: url("https://i.postimg.cc/TPhy3s8T/branimir-balogovic-y-Y66-QAb-Gxq4-unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40rem;
  width: 100%;
}

.first-txt {
  position: absolute;
  top: 17px;
  left: 20px;
}
/*
.h2{
  font-size:5rem;
   text-align: center;
}
.h1{
  text-align: center;
}
.text{
  position: relative;
  margin-top: 15rem;
}
body {
  height: 100%;
  font-family: 'tradegothiclt-bold', sans-serif;
}
h1 {
  font-size: 5em;
  color: white;
  text-transform: uppercase;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
}
p {
  position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #FFFFFF,rgb(255, 240, 240), #349F4D);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}
@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}*/

img{
  margin-right: 8rem;
}

h5{
  color: white;
}
.carousel-item{
  height: 100vh;
  height: 35rem;
  min-height: 300px;
  -webkit-background-size: cover;
  background-size: cover;

}
.carousel-item::before{
  content: "";
  display:block;
  position:absolute;
  top:0;
  bottom: 0;
  right:0;
  background: #000;
  opacity: 0.7;
} 
.carousel-caption{
  bottom:180%;
  padding-left: 100px;
  padding-right:100px;
}

.carousel-caption h1{
  font-size: 100px;
 font-weight: 700;
}


.carousel-caption h5{
  font-size: 18px;
 top: 2rem;
}


.column {
 
  display: flex;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.image-row {
  display: flex; 
  /*justify-content: space-between; */
  align-items: center; 
  padding: 15px; 
}

</style>
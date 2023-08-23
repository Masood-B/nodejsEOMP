<template>
  <div class="body">
    <header id="header">
      <ul>
        <li>
            <router-link class="nav-link" to="/home2" style="color:white">Home2</router-link>

        </li>
        <li>
            <router-link class="nav-link" to="/about" style="color:white">About</router-link>

        </li>
        <li>
            <router-link class="nav-link" to="/Products" style="color:white">Products</router-link>

        </li>
        <li>
            <router-link class="nav-link" to="/admin" style="color:white">Admin</router-link>

        </li>
        <li>
            <router-link class="nav-link" to="/contact" style="color:white">Contact</router-link>

        </li>

        
      </ul>
      <a href="" class="logo">HorrorHaven</a>
    </header>

    <section>
      <!-- <img src="https://i.postimg.cc/JhPwY0F4/wp3888958-hereditary-movie-wallpapers.jpg" style="width: 400px; height:220px ; position:absolute ; left: 100px; top: 140px;"> -->
      <div class="content">
        <div class="details">
          <span>99% Match</span>
          <span>2011-1022</span>
          <span>18+</span>
        </div>
        <div class="button">
          <span class="btn1">Play</span>
          <span class="btn2">My List</span>
        </div>
      </div>
    </section>
    <div class="sec">
      <div class="info">
        <span class="title">Hereditary</span>
        <span class="btn3">Show More</span>
      </div>
      <div class="row">
        <div class="col">
          <img src="https://i.postimg.cc/RZCx7wPb/wp3088983-hereditary-movie-wallpapers.jpg">
        </div>
      
        <div class="col">
            <img src="https://i.postimg.cc/65wkKdN5/wp3088984-hereditary-movie-wallpapers.png">
          </div>

          <div class="col">
            <img src="https://i.postimg.cc/yNwGbRPK/wp3088987-hereditary-movie-wallpapers.jpg">
          </div>

          <div class="col">
            <img src="https://i.postimg.cc/JhPwY0F4/wp3888958-hereditary-movie-wallpapers.jpg">
          </div>
    </div>
    <!-- <div class="row2">
        <div class="col1 col">
            <h2>Overview</h2>
            <p>When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, 
                trying to outrun the sinister fate they have inherited.</p>
        </div>

    </div> -->

    <!-- <div class="col2 col">
<h2>Genre</h2>
<p>TV Shows Based on Books</p>
<p>Brtish Tv Shows</p>
<p>TV Action and Adventure</p>

    </div> -->
    </div>
  </div>
</template>
  
  <script>
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  components: HeaderComp,
};
</script>
 
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.body {
  background: url(" https://i.postimg.cc/4dg5cQPY/wp3088989-hereditary-movie-wallpapers.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

#header {
  position: absolute;
  top: 0%;
  left: 0;
  padding: 30px 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10000;
}
#header .logo {
  color: red;
  font-weight: 700;
  font-size: 2em;
  text-decoration: none;
}
#header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
#header ul li {
  list-style: none;
  margin-left: 20px;
  font-size: 14px;
}
#header ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: ghostwhite;
  border-radius: 2px;
}
#header ul li a:hover {
  background: linear-gradient(45deg, red, rgb(244));
  color: rgb(253, 252, 252);
}

section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
section .content {
  position: absolute;
  left: 2px;
  top: 625px;
}
section .content .details span {
  position: relative;
  top: -245px;
  left: 108px;
  color: ghostwhite;
  margin: 12px;
  font-weight: 400;
}
.details span:last-child {
  border: 1px solid rgb(182, 181, 181);
  padding-top: 4px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 2px;
  border-radius: 2px;
  font-size: 12px;
}
.button span {
  position: relative;
  top: -205px;
  left: 108px;
  color: white;
  margin: 10px;
  font-weight: 500;
}

.button .btn1 {
  background: red;
  padding: 14px 26px;
  border-radius: 2px;
  transition: 0.5;
}
.button .btn2 {
  background: #ffffff2e;
  padding: 14px 26px;
  border-radius: 2px;
  transition: 0.5s;
}
.button .btn1:hover {
  opacity: 0.8;
  cursor: pointer;
}
.button .btn2:hover {
  background: #fff;
  color: red;
  font-weight: 600;
  cursor: pointer;
}

section::before{
    content:'';
    position:absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 330px;
    background: linear-gradient(to top, #0c181c, transparent);
    z-index: -1;
    overflow: hidden;
}

.sec{
    position: relative;
    top:0;
    height: 500px;
    padding-left :110px ;
    background-color: #02161c;
   
}

.sec span{
    position: relative;
    margin-bottom:10px ;
    color: #fff;
    margin:7px;
}

.sec .title{
 font-size:20px;
 font-weight: 600;   
}

.sec .btn3{
    font-size: 12px;
    top: -130px;

}
.sec .row{
    position: absolute;
    top:-88px;
    height: 200px;
    width: 82%;
    
}

img{
    height: 15rem;
    width: 15rem;
}
.info{
    position: absolute;
    top:-130px;
}
.sec .row .col{
    width: 220px;
    height: 148px;
    float:left;
    justify-content: center;
    align-items: center;
    margin-left: 72px;
}

.sec .row .col:first-child{
    margin:0px;
    margin-left: 5px;
}
.sec .row .col img:hover{
transform: scale(1.1);
cursor:pointer;
}


.sec .row2{
    position: absolute;
    top: 88px;
    height: 200px;
    width: 82%;
}

.sec .row .col1{
    width: 810px;
    float:left;
    margin-right: 70px;
}
.sec .row2 .col2{
    overflow:hidden;
}
.sec .row .col p{
    color: #a9a9a9;
    line-height: 20px;

}
.sec .row .col h2{
    color: #fff;
margin-bottom:  18px;
font-size: 20px;
}
</style>
<template>
    <div>
        <!-- <nav class="navbar navbar-expand-lg">

            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li>
                    <router-link class="head" to="/">Home</router-link>
                  </li>
                  <li>
                    <router-link class="head" to="/about">About Us</router-link>
                  </li>
                  <li>
                    <router-link class="head" to="/admin">Admin</router-link>
                  </li>
                  <li>
                    <router-link class="head" to="/products">Products</router-link>
                  </li>
                  <li>
                    <router-link class="head" to="/contact">Contact</router-link>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>   -->

          <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">HorrorHaven</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./index.html" style="margin-left:60rem ;">Home</a>
                  </li>
                  <li >
                    <a class="nav-link" href="./script/about.html">About</a>

                    <router-link class="head" to="/about">About Us</router-link>

                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./script/product.html">Product</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="./script/product.html">Admin</a>
                  </li>


                  <li class="nav-item">
                    <a class="nav-link" href="./script/product.html">Contact</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="./script/product.html">Skills</a>
                  </li>

                  <form class="d-flex" role="search">
                    <i class="bi bi-search" style="margin-top:0.5rem;color:white;"><span style="margin-left:1.3rem;color:white;">SEARCH</span></i>
                </form>
                </ul>
              </div>
            </div>
          </nav> -->
   
          <nav class="navbar navbar-expand-lg " >
        <!-- <a href="" class="logo">HorrorHaven</a> -->

            <div class="container-fluid">
              <a class="navbar-brand" href="#" ><img src="" id="Lee"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav" mx-auto p-2 >
                  <!-- <li class="nav-item">
                    <router-link class="nav-link" to="/" style="color:white">Home</router-link>
                  </li> -->
                  <li class="nav-item">
                    <router-link class="nav-link" to="/home2" style="color:white">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/about" style="color:white">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/Products" style="color:white">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/admin" style="color:white">Admin</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/contact" style="color:white">Contact</router-link>
                  </li>
                  <form class="d-flex" role="search">
                    <i class="bi bi-search" style="margin-top:0.5rem;color:white;"><span style="margin-left:1.3rem;color:white;">SEARCH</span></i>
                </form>
                 
                </ul>
              </div>
            </div>
            <a class="navbar-brand" id="navpic" href="#"><img src="https://i.postimg.cc/jSDHxZyz/Screenshot-2023-08-22-121014.png" class="haven" alt=""></a>

          </nav>
        </div> 
   
</template>

<script>
   export default {
       
   }
</script>

<style scoped>
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
/*nav{
 background-color: #000;
}



.nav-link:hover {
 background-color: rgb(206, 22, 22);
 border-radius: 30%; 
}
.pic{
   height: 1;
   width: 10%
}*/

.haven{
 width: 8rem;   

}
</style>
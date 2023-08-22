<template>
    <div class="Products">
        <h2>Find movies to watch</h2>
        <div class="container">
            <div class="row">
              <div class="col m-auto">
                <div class="boxesContainer" v-for="data in Projects" :key="data.id">
                
                  
                    
                      <div class="cardBox">
                        <div class="card w-100">
                          <div class="front">
                    
                            <img :src="data.image" alt="" class="w-100" style="width:10rem;height:10rem; border-radius: 10%;">
                           
                            <p style="color:white">{{data.Name}}</p>

                          </div>
                          <div class="back">
                          
                          <p style="color:black">{{ data.Description }}</p>
                    
                            <a :href="data.github" class="w-50" target="_blank" style="margin-right: 2rem;">watch</a>
                
                            <a a :href="data.netlify" class="w-50" target="_blank">Download</a>
                          </div>
                        </div>
                      </div>
                  
                  
                
                
                  
                
                  
                  
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.Products{
    color: white;
}
</style>
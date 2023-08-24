<template>
    <div>
<!-- <div class="card">
    <img :src="$route.query.prodUrl" alt="">
    <div class="card-title">
        {{ $route.query.prodName }}
    </div>
</div> -->

<div>
    <div class="card m-5" style="width: 18rem">
        <img :src="$route.query.img" class="card-img-top" alt="">
        <div class="card-title text-white">
            {{ $route.query.product }}
        </div>
    </div>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
<div class="card">
    <img :src="$route.query.prodUrl" alt="">
    <div class="card-title">
        {{ $route.query.prodName }}
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
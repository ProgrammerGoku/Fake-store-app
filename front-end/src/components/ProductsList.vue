<template>
    <div id="product-item">
            <img :src="product.image">
            <h3 class="product-name">{{ product.title }}</h3>
            <p class="product-price">${{ product.price }}</p>
            <router-link :to="'/product/' + product.id">
                <button>View Details</button>
            </router-link>
    </div>
</template>

<script>
export default {
    name:'ProductList',
    props:['product'],
}
</script>
<style>
#product-item img{
    height: 200px;
    width: 200px;
}

</style>

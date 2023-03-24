<template>
 <div id="page-wrap" v-if="product">
    <div id="img-wrap">
        <img :src="product.image"/>
    </div>
    <div id="product-details">
        <h1>{{ product.title }}</h1>
        <h3>${{ product.price }}</h3>
        <p>Average Rating:{{ product.rating.rate }}</p>
        <button @click="addToCart(product.id)">Add To Cart!</button>
        <h3>Description</h3>
        <p>{{ product.description }}</p>
    </div>




 </div>
 <ErrorPage v-else/>
</template>

<script>
import axios from 'axios'
import ErrorPage from './ErrorPage.vue'
export default {
    name:"ProductDetail",
    data(){
        return {
            product:{},
        }
    },
    components:{
        ErrorPage,
    },
    methods:{
       async addToCart(id){
            const res=await axios.get("http://localhost:8000/api/users/123/cart/")
            const cartItems=res.data
            if((cartItems.find(item=>item.id===id))!==undefined){
                alert("Item already exists in cart!")
            }
            else{
            // if(cartItems.find((item)=>item.id===id)!==undefined){
            //     alert("Item is already added to cart!")
            // }
            // else{
            await axios.post("http://localhost:8000/api/users/123/cart/",{
                id:Number(this.$route.params.id),
            })
            alert("Item successfully added to cart!")
        };


        }
    },
    async created(){
        const res=await axios.get(`http://localhost:8000/api/product/${this.$route.params.id}`)
        const product=res.data
        this.product=product
    }
    
}
</script>

<style>
#product-details{
    border-color: brown;
}
#img-wrap img{
    height:200px;
    width:200px;
}
</style>
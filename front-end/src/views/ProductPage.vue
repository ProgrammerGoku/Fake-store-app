<template>
    <div id="page-wrap">
        <ProductsList 
            v-for="product in products"
            :key="product.id"
            :product="product"/>
    </div>
</template>

<script>
import axios from 'axios'
import ProductsList from '../components/ProductsList.vue'
export default {
    name:"ProductPage",
    data(){
        return{
            products:[],
        }
    },
    components:{
        ProductsList,
    },
    async created(){
        const res =await axios.get('http://localhost:8000/api/products')
        const products=res.data;
        this.products=products;


    }
    
}
</script>

<style scoped>
  #page-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>
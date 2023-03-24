<template>
    <div id="page-wrap">
        <h1>Shopping Cart</h1>
        <div v-if="cartItems.length>0">
            <CartList :key=item.id v-for="item in cartItems" :item="item" @remove-item="RemoveItem" :length="cartItems.length"></CartList>
            <div>
                <h3 id="total-price">Total:${{ totalCost }}</h3>
            </div>
        </div>
        <div v-else>
            <h2>Nothing in the cart!</h2>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CartList from '../components/CartList.vue'
export default {
    name: "CartPage",
    data() {
        return {
            cartItems:[],
            totalCost: 0,
        }

    },
    components: {
        CartList,
    },
    methods: {
        totalPrice(cartItems) {
            let cost = 0;
            console.log(this.cartItems);
            for (let item in cartItems) {
                cost+=cartItems[item].price

            }
            this.totalCost=cost.toFixed(2);


        },
        async RemoveItem(id) {
            await axios.delete(`http://localhost:8000/api/users/123/cart/${id}/`);
            const res=await axios.get("http://localhost:8000/api/users/123/cart");
            const cartItems=res.data
            this.cartItems=cartItems;
            this.totalPrice(this.cartItems);

        }
    },
    async created(){
        const res=await axios.get("http://localhost:8000/api/users/123/cart")
        const cartItems=res.data
        this.cartItems=cartItems
        this.totalPrice(this.cartItems)

    }
}
</script>

<style scoped>


</style>
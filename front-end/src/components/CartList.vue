<template>
        <div>
            <img :src="item.image" class="product-image">
            <div class="details-wrap">
                <h3>{{ item.title }}</h3>
                <p>${{ item.price }}</p>
            </div>
        <div>
            <button @click="RemoveItem(item.id)">Remove Item</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'CartList',
    data(){
        return{
        totalCost:0
        }
    },
    props:{
        item:Object,
        length:Number,
    },
    methods:{
        RemoveItem(id){
            if(confirm("Are you sure to remove the item?"))
                this.$emit('remove-item',id)
        }
    }
}
</script>

<style>
img{
    height:200px;
    width:200px;
}
</style>
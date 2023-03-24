<template>
    <div class="container">
      <div class="title">
        <router-link to="/products" id="products-link">THE FAKE STORE</router-link>
      </div>
      <div class="cart"> 
        <router-link to="/cart" id="cart-link">Cart</router-link>
      </div>     
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
  .container {
    border-bottom: 1px solid #ddd;
    height: 100px;
    width: 100%;
  }

  #products-link {
    text-align: center;
    display: block;
    color: black;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 16px;
    text-decoration: none;
  }

  #products-link h1 {
      margin: 0;
  }

  #cart-link {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 22px;
    display: block;
    text-decoration: none;
    color: black;



  }
</style>
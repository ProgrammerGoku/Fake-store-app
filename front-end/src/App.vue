<template>
  <div class="container">
  <div id="app">
    <NavBar></NavBar>
  
    <router-view/>
  </div>
  <div class="Footer">
    <div class="creator">
      <h3>Made with love by Gokul Ram</h3>
    </div>

  </div>
</div>
</template>
<script>
import NavBar from './components/NavBar.vue'
export default{
  name:'App',
  components:{
    NavBar,
  }
}

</script>
<style>

* {
    box-sizing: border-box;
    font-family: Arial;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: rgba(0, 0, 0, 0.461);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
  .Footer{
    background-color :darkgrey;
    margin-top:5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width:100%;

    

  }
  .creator{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-top-width: 10px;
  }

</style>

import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage'
import ProductPage from '../views/ProductPage'
import ProductDetail from '../views/ProductDetail'
import ErrorPage from '../views/ErrorPage.vue'

Vue.use(VueRouter)

const routes = [{
  path:'/products',
  name:'Products',
  component:ProductPage,
},
{
  path:'/product/:id',
  name:'ProductDetail',
  component:ProductDetail
},
{
  path:'/cart',
  name:'CartPage',
  component:CartPage,
},
{
  path:'*',
  component:ErrorPage
}

]

const router = new VueRouter({
   mode:'history',
   base:process.env.BASE_URL,
  routes
})

export default router

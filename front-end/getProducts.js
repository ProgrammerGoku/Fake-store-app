const axios=require('axios')

var products;
const url='https://fakestoreapi.com/products'
async function getapi(url){
    const data=await fetch(url)
    const res=await data.json()
    console.log(res)
}
getapi(url)
// let products=[]
// async function getapi(url){
//     const data=await fetch(url)
//     const res=await data.json()

// }
// getapi(url)
// console.log(res)
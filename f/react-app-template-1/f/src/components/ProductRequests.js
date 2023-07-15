// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Product from './Product'
// import ProductForm from './ProductForm'

//   // ----------------------------------------------------------------------

// export default function ProductRequests() {
//   const [product, setProduct] = useState([])

//   // GET REQUEST
  
//   function getProduct(){
//     axios.get('/product')
//     .then(response => setProduct(response.data))
//     .catch(error => console.log(error))
//   }

//   // ----------------------------------------------------------------------

//   function addProduct(newProduct){
//     axios.post('/product', newProduct)
//     .then(response => {
//       setProduct(previousProduct => [ ...previousProduct, response.data])
//     })
//       .catch(error => console.log(error))
//   }

//   // ---------------------------------------------------------------------- /// ********* ///

//   function editProduct(updates, productId){
//     axios.put(`/product/${productId}`, updates)
//      .then(response => {
//         setProduct(previousProduct => previousProduct.map(product => product._id !== productId ? product : {...product, ...updates}))
//      })
//      .catch(error => console.log(error))
//   }

//   // ----------------------------------------------------------------------

//   function deleteProduct(productId){
//     axios.delete(`/product/${productId}`)
//     .then(response => {
//       setProduct(previousProduct => previousProduct.filter(previousProduct => previousProduct._id !== productId))
//     })
//     .catch(error => console.log(error))
//   }

//   // ----------------------------------------------------------------------

//   useEffect(()=>{
//     getProduct()
//   },[])

//   // ----------------------------------------------------------------------

//   return (
//     <div id='form-box'>
//       <ProductForm
//         submit={addProduct}
//         btnText={'Add Product'}
//       />
//       { 
//       product.map(previousProduct => 
//         <Product 
//           {...previousProduct} 
//           deleteProduct={deleteProduct}
//           editProduct={editProduct}
//         />)
//       }
//       </div>
//   )
// }

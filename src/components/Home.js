import React from 'react'

 const Home = (props) => {
   console.log(props);
  return (
    <div>
      Home
      <button onClick={() => {
        props.addToCartHandler({name: 'Test', address: "Pune"})
      }}>Add to cart</button>
      <button onClick={() => props.removeToCartHandler()}>
        Remove to cart
      </button>
    </div>
  )
}
export default Home;
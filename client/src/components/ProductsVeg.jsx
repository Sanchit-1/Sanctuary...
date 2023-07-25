import React from 'react'
import styled from 'styled-components'
import ProductVeg from "../components/ProductVeg"
import { Vegetables } from '../data'
const Container=styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
      {Vegetables.map((item)=>(
        <ProductVeg item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products

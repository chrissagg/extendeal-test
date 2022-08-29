import React from 'react'
import { Container } from 'react-bootstrap'
import ListProducts from '../components/ListProducts'

const App = () => {
  return (
    <Container fluid>
      <h1 className="text-center">Listado de productos</h1>
      <ListProducts />
    </Container>
  )
}

export default App
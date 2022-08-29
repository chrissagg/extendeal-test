import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const NewProduct = () => {

  const navigate = useNavigate()

  
  const [data, setData] = useState({name:"", price:"", description:"", image:""})

  const handleChange = ({target}) => {
    setData({
      ...data,
      [target.name]: target.value
    })
  }

  const URL = "http://localhost:5000/products"
 
/**
 * When the form is submitted, prevent the default action, then make a post request to the URL with the
 * data, and if the response is successful, show a success message, otherwise show an error message.
 */
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(URL, data);
    if(response.status === 201) {
      Swal.fire(
        'Guardado!',
        `Se ha agregado ${response.data.name} como nuevo producto`,
        'success'
      )
        navigate('/')
    } else {
      Swal.fire(
        'Error!',
        'Hubo un problema al registrar producto',
        'error'
      )
    }
    
  }

  return (

    

    <Container>
      <h1 className="text-center">Nuevo Producto</h1>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Control
          type="text"
          name="name"
          placeholder="producto nuevo"
          value={data.name}
          onChange={handleChange}
          required
        />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
          type="number"
          name="price"
          placeholder="precio"
          value={data.price}
          onChange={handleChange}
          required
        />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
          type="text"
          name="description"
          placeholder="descripción"
          value={data.description}
          onChange={handleChange}
          required
        />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
          type="text"
          name="image"
          placeholder="link de imagen"
          value={data.image}
          onChange={handleChange}
          required
        />
        </Form.Group>
        <button className="btn btn-success">Guardar</button>
      </Form>
    </Container>
  )
}

export default NewProduct
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardProduct from './CardProduct'
import { Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const ListProducts = () => {

  const URL = "http://localhost:5000/products"
  
  const getData = async () => {
    const response = axios.get(URL);
    return response;
  }

  const [list, setList] = useState([])
  const [updateList, setUpdateList] = useState([])

  //controlar lo que se escribe en la barra de búsqueda
  const [busqueda, setBusqueda] = useState("")
  
  const handleChange = (e) => {
    setBusqueda(e.target.value)
    
  }

  //metodo de filtrado
  let results = []
  if(!busqueda) {
    results = list
  }else{
    results = list.filter((dato) =>
    dato.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
    )
  }

  useEffect (() => {
    getData().then((response) => {
      setList(response.data)
    })
  }, [updateList])


  return (
    
    <Container className="mb-5" >
      <Row>
        <Col sm={10}> 
          <input className="form-control" 
            value={busqueda} 
            placeholder="buscar tu producto"
            onChange={handleChange} 
          />
        </Col>
        <Col sm={2}>
          <button className="btn btn-success">
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </Col>
      </Row>
      <Row className="mt-5">
      {
        results.map((product, index) => (
          <CardProduct 
            key={index}
            product={product}
            setUpdateList={setUpdateList}
            updateList={updateList}
          
          />
          
        ))
      }
      </Row>
      
     

    </Container>
  )
}

export default ListProducts
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './styles/styles.css'

const CardProduct = ({product}) => {
  return (
    <div className="col-4 mb-3">
      <Card>
      <Card.Title className="text-center lead bg-dark text-white">{product.name}</Card.Title>
        <img src={product.image} alt={product.name} className="card-img-top image-card"/>
        <Card.Body>
          <ListGroup>
            <ListGroupItem>Precio: <strong>USD {product.price}</strong> <i>(Diponible)</i></ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardProduct
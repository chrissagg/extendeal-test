import React, { useState} from 'react'
import { Card, ListGroup, ListGroupItem, Modal, Form} from 'react-bootstrap'
import './styles/styles.css'
import axios from 'axios'
import Swal from 'sweetalert2'





const CardProductEdit = ({product}) => {

  const URL = "http://localhost:5000/products"

 

  const [showModal, setShowModal] = useState(false)
  const [dataModal, setDataModal] = useState({})
  
  
  const handleCloseModal = () => {setShowModal(false) }
  const handleOpenModal = () => {setShowModal(true)}

 
  const handleChangeModal = ({target}) => {
    setDataModal({
      ...dataModal,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${URL}/${dataModal.id}`, dataModal) 
    if(response.status === 200) {
      Swal.fire(
        'Guardado!',
        `Se ha actualizado el producto con éxito`,
        'success'
      ) 
      handleCloseModal()
      
    }else {
      Swal.fire(
        'Error!',
        `Hubo un error al intentar modificar el registro`,
        'error'
      ) 
    }
    window.location.reload()
  }

  const handleDelete = async () => {

    Swal.fire({
      title: `Estas seguro de eliminar ${product.name}?`,
      text: '! Este cambio no se puede revertir',
      icon: 'warning',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        
        axios.delete(`${URL}/${product.id}`).then((response)=>{
          console.log(response)
          if (response.status === 200) {
            Swal.fire(
              'Guardado!',
              `Se ha eliminado el producto con éxito`,
              'success'
            ) 
            window.location.reload()
          } else {
            Swal.fire(
              'Error!',
              'Hubo un problema al registrar producto',
              'error'
            )
            
          }
        })
        
      }
    })

    
  }

  const handleEdit = () => {
    handleOpenModal()
    setDataModal(product)
  }

  

  return (
    <div className="col-4 mb-3 mt-3">
      <Card>
        <img src={product.image} alt={product.name} className="card-img-top image-card"/>
        <Card.Body>
          <Card.Title className="text-center">{product.name}</Card.Title>
          <ListGroup>
            <ListGroupItem>Precio: <strong>USD {product.price}</strong> <i>(Diponible)</i></ListGroupItem>
            <ListGroupItem className="text-justify">Descripción: <strong> {product.description}</strong> </ListGroupItem>
            <ListGroupItem>Identificador: <strong>ID {product.id}</strong></ListGroupItem>
          </ListGroup>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-danger me-2" onClick={handleDelete}>Eliminar</button>
            <button className="btn btn-warning me-2"onClick={handleEdit}>Editar</button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar producto</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit = {handleSubmit}
        >
          <Modal.Body>

            <Form.Group className="mb-3">
              <Form.Label>Producto</Form.Label>
              <Form.Control
              type="text"
              name="name"
              placeholder="producto nuevo"
              value={dataModal.name}
              onChange={handleChangeModal}
              required
              />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
              <Form.Control
              type="number"
              name="price"
              placeholder="precio"
              value={dataModal.price}
              onChange={handleChangeModal}
              required
              />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
              <Form.Control
              type="text"
              name="description"
              placeholder="descripción"
              value={dataModal.description}
              onChange={handleChangeModal}
              required
              />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Imagen</Form.Label>
              <Form.Control
              type="text"
              name="image"
              placeholder="link de imagen"
              value={dataModal.image}
              onChange={handleChangeModal}
              required
              />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
          <button className="btn btn-secondary" type="reset" onClick={handleCloseModal}>
              Cerrar
            </button>
            <button className="btn btn-success"type="submit" >
              Guardar cambios
            </button>
          </Modal.Footer>
        </Form>
      </Modal>

      
    </div>
  )
}

export default CardProductEdit
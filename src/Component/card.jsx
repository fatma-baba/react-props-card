import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './card.css'
const CardItem = ({
    itemName,
    itemPrice,
    itemPicture
}) => {
  // arraow function  
  const showPrice = () => {
        alert(`item price : ${itemPrice}`)
  }

    return (
        <Card className="card-item">
        <Card.Img variant="top" src={itemPicture} />
        <Card.Body>
          <Card.Title>{itemName}</Card.Title>
          <Card.Text>
            Price : {itemPrice}
          </Card.Text>
          <Button variant="primary" onClick={ showPrice }>Show price</Button>
        </Card.Body>
      </Card>
    )
}

export default CardItem<
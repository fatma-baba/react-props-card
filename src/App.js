import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from './Component/card'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  const productList = [
    {
      itemName: 'Car',
      itemPrice: '4566',
      itemPicture : 'https://149478393.v2.pressablecdn.com/wp-content/uploads/2016/10/ghibli_2.jpg.jpg'
    },
    {
      itemName: 'Bus',
      itemPrice: '89556',
      itemPicture : 'https://st.depositphotos.com/1019192/4338/i/600/depositphotos_43389909-stock-photo-tourist-bus-traveling-on-road.jpg'
    },
    {
      itemName: 'Video Game',
      itemPrice: '5451',
      itemPicture : 'https://d3bzyjrsc4233l.cloudfront.net/news/joy_of_gaming.jpg'
    },
    {
      itemName: 'Elctro',
      itemPrice: '3295',
      itemPicture : 'https://www.businesstimes.com.sg/sites/default/files/styles/large_popup/public/image/2021/04/16/BT20210416-XSA-017-03.jpg?itok=eREuiqGR'
    }
  ]
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          {productList.map(item => <CardItem itemName={item.itemName} itemPicture={item.itemPicture} itemPrice={item.itemPrice} />)}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;

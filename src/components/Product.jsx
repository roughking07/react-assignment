import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';  
// import  Button from '';
function Product() {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
          <Card style={{ 'margin-bottom': '15px' }}>
            <Card.Img variant="top" src='https://th-i.thgim.com/public/sci-tech/health/qqe11f/article31879293.ece/alternates/FREE_1200/fabiflujpg/200px160' />
            <Card.Body>
              <Card.Text className='mx-auto'>
                <h5>Favpiravir 400mg (Fabiflu) Tablets</h5>
                <h3><span style={{'color':'rgb(130,12,12)'}}>Rs 1,775/</span><span style={{'font-size':16}}> stripe</span></h3>
              <span style={{'font-size':15,'font-weight':'900' }}>Glenmark Pharamaceutical Limited </span>
              <br></br>
              <span style={{'font-size':15,'font-weight':'400' }}>PARVAT PATIYA, SURAT, GUJRAT</span>
              </Card.Text>
              <Card.Footer className='mx-auto'>
                <button style={{'font-size':23,'border':'None','background-color': 'transparent', 'color':'teal'}}><i class="fa-solid fa-paper-plane"></i>&nbsp;&nbsp;Contact Supplier</button>
              </Card.Footer>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
  
}

export default Product;
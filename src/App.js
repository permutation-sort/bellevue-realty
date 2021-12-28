import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Interior from './Images/interior.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Photo from './Images/Photo.jpg';
import Exterior from './Images/Exterior.jpg';




function App() {
  return (
    <div className="App">

      {/* NAVIGATION BAR */}
      <Container>
        <Row>
          <Col>
              <Navbar expand="lg" variant="light" bg="light">
                <Container>
                <Navbar.Brand href="#">Bellevue Realty Services</Navbar.Brand>
                <Navbar.Text> <a href="mailto: matt@bellevuerealtyservices.com">Contact us</a> </Navbar.Text>
                </Container>
            </Navbar>
          </Col>
          </Row>
      
      {/* HERO CAROUSEL */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-200"
            src={Interior}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Interior staging</h3>
            <p>Professional staging done right.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-200"
            src={Photo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Professional photography</h3>
            <p>Packages to fit any size of home.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-200"
            src={Exterior}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Listing services</h3>
            <p>Marketing and lead generation for any listing.</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
              </Container>

    </div> 
  );
}

export default App;

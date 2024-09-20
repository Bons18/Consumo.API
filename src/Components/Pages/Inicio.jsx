import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa'; 

const Inicio = () => {
    return (
        <Container fluid className="text-center py-5 bg-white">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="mb-4 fw-bold text-dark">Bienvenido a Nuestro Sitio</h1>
                    <p className="lead mb-4 text-muted">
                        Este es el punto de partida para explorar nuestras funcionalidades y servicios. 
                        Estamos aquí para ofrecerte la mejor experiencia posible.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <Button 
                            variant="primary" 
                            href="/contacto" 
                            className="px-4 py-2 rounded-pill shadow"
                            style={{ fontWeight: 'bold' }}
                        >
                            Contáctanos <FaChevronRight className="ms-2" />
                        </Button>
                        <Button 
                            variant="outline-primary" 
                            href="/servicios" 
                            className="px-4 py-2 rounded-pill shadow"
                            style={{ fontWeight: 'bold' }}
                        >
                            Ver Servicios <FaChevronRight className="ms-2" />
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Inicio;

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

const Servicios = () => {
    return (
        <Container fluid className="py-5 bg-light">
            <h1 className="text-center mb-5 fw-bold text-dark">Nuestros Servicios</h1>
            <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                    <Card className="shadow border-0 h-100 rounded-3">
                        <Card.Body className="d-flex flex-column p-4">
                            <div className="text-center mb-3">
                                <FaInfoCircle className="fs-1 text-primary" />
                            </div>
                            <Card.Title className="text-center fw-bold fs-5 mb-3 text-dark">Servicio 1</Card.Title>
                            <Card.Text className="text-muted text-center mb-4">
                                Descripción breve de lo que incluye el servicio 1. Explica cómo puede beneficiar al usuario.
                            </Card.Text>
                            <Button 
                                variant="outline-primary" 
                                href="/servicio1" 
                                className="mt-auto w-100 rounded-pill py-2"
                                style={{ fontWeight: 'bold' }}
                            >
                                Saber más
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="shadow border-0 h-100 rounded-3">
                        <Card.Body className="d-flex flex-column p-4">
                            <div className="text-center mb-3">
                                <FaInfoCircle className="fs-1 text-primary" />
                            </div>
                            <Card.Title className="text-center fw-bold fs-5 mb-3 text-dark">Servicio 2</Card.Title>
                            <Card.Text className="text-muted text-center mb-4">
                                Descripción breve del servicio 2 y sus beneficios para los clientes.
                            </Card.Text>
                            <Button 
                                variant="outline-primary" 
                                href="/servicio2" 
                                className="mt-auto w-100 rounded-pill py-2"
                                style={{ fontWeight: 'bold' }}
                            >
                                Saber más
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="shadow border-0 h-100 rounded-3">
                        <Card.Body className="d-flex flex-column p-4">
                            <div className="text-center mb-3">
                                <FaInfoCircle className="fs-1 text-primary" />
                            </div>
                            <Card.Title className="text-center fw-bold fs-5 mb-3 text-dark">Servicio 3</Card.Title>
                            <Card.Text className="text-muted text-center mb-4">
                                Explicación sobre el servicio 3 y cómo puede mejorar la experiencia del usuario.
                            </Card.Text>
                            <Button 
                                variant="outline-primary" 
                                href="/servicio3" 
                                className="mt-auto w-100 rounded-pill py-2"
                                style={{ fontWeight: 'bold' }}
                            >
                                Saber más
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Servicios;

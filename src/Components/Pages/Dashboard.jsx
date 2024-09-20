import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCog, FaChartBar, FaUserCog } from 'react-icons/fa'; // Importar iconos

const Dashboard = () => {
    return (
        <Container fluid className="p-5" style={{ minHeight: '100vh', backgroundColor: '#f1f1f1' }}>
            <h1 className="text-center mb-5" style={{ fontWeight: '600', fontSize: '3rem', color: '#333' }}>Panel de Control</h1>

            <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                    <Card className="shadow-lg border-0 rounded" style={{ backgroundColor: '#ffffff' }}>
                        <Card.Body className="text-center">
                            <div className="mb-4" style={{ fontSize: '3rem', color: '#007bff' }}>
                                <FaUserCog />
                            </div>
                            <Card.Title className="fw-bold">Sección 1</Card.Title>
                            <Card.Text className="text-muted">
                                Aquí puedes gestionar la información de tu cuenta.
                            </Card.Text>
                            <Button variant="primary" className="rounded-pill">Ir a Sección 1</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="shadow-lg border-0 rounded" style={{ backgroundColor: '#ffffff' }}>
                        <Card.Body className="text-center">
                            <div className="mb-4" style={{ fontSize: '3rem', color: '#28a745' }}>
                                <FaChartBar />
                            </div>
                            <Card.Title className="fw-bold">Sección 2</Card.Title>
                            <Card.Text className="text-muted">
                                Aquí puedes ver las estadísticas de tu actividad.
                            </Card.Text>
                            <Button variant="success" className="rounded-pill">Ir a Sección 2</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="shadow-lg border-0 rounded" style={{ backgroundColor: '#ffffff' }}>
                        <Card.Body className="text-center">
                            <div className="mb-4" style={{ fontSize: '3rem', color: '#ffc107' }}>
                                <FaCog />
                            </div>
                            <Card.Title className="fw-bold">Sección 3</Card.Title>
                            <Card.Text className="text-muted">
                                Accede a configuraciones avanzadas del sistema.
                            </Card.Text>
                            <Button variant="warning" className="rounded-pill">Ir a Sección 3</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;

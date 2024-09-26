import { useState } from 'react';
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { BsGearFill, BsBarChartFill, BsPersonFill } from 'react-icons/bs';
import './Dashboard.css'; // Estilos personalizados

const Dashboard = () => {
    const [openInfo, setOpenInfo] = useState({});

    const toggleInfo = (section) => {
        setOpenInfo((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <Container fluid className="p-5" style={{ minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
            <h1 className="text-center mb-5" style={{ fontWeight: '700', fontSize: '3.5rem', color: '#333' }}>Panel de Control</h1>

            <Row className="justify-content-center">
                <Col md={4} className="mb-4">
                    <Card className="shadow border-0 rounded" style={{ backgroundColor: '#ffffff' }}>
                        <Card.Body className="text-center p-4">
                            <div className="icon-container mb-4">
                                <BsPersonFill />
                            </div>
                            <Card.Title className="fw-bold" style={{ fontSize: '1.5rem', color: '#007bff' }}>Gestión de Cuenta</Card.Title>
                            <Card.Text className="text-muted" style={{ fontSize: '1.5rem' }}> {/* Tamaño de letra unificado */}
                                Aquí puedes gestionar la información de tu cuenta.
                            </Card.Text>
                            <Button variant="outline-primary" className="rounded-pill" onClick={() => toggleInfo('account')}>
                                {openInfo.account ? 'Ocultar Información' : 'Más Información'}
                            </Button>
                            <Collapse in={openInfo.account}>
                                <div className="mt-3 info-text">
                                    <p style={{ fontSize: '1.5rem' }}> {/* Tamaño de letra unificado */}
                                        Actualiza tu nombre, correo electrónico y cambia tu contraseña para mantener la seguridad de tu cuenta.
                                    </p>
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="shadow border-0 rounded" style={{ backgroundColor: '#ffffff' }}>
                        <Card.Body className="text-center p-4">
                            <div className="icon-container mb-4">
                                <BsBarChartFill />
                            </div>
                            <Card.Title className="fw-bold" style={{ fontSize: '1.5rem', color: '#28a745' }}>Estadísticas</Card.Title>
                            <Card.Text className="text-muted" style={{ fontSize: '1.5rem' }}> {/* Tamaño de letra unificado */}
                                Aquí puedes ver las estadísticas de tu actividad.
                            </Card.Text>
                            <Button variant="outline-success" className="rounded-pill" onClick={() => toggleInfo('stats')}>
                                {openInfo.stats ? 'Ocultar Información' : 'Más Información'}
                            </Button>
                            <Collapse in={openInfo.stats}>
                                <div className="mt-3 info-text">
                                    <p style={{ fontSize: '1.5rem' }}> {/* Tamaño de letra unificado */}
                                        Accede a gráficos interactivos que muestran tu actividad diaria, incluyendo tareas completadas y progreso.
                                    </p>
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="shadow border-0 rounded" style={{ backgroundColor: '#ffffff' }}>
                        <Card.Body className="text-center p-4">
                            <div className="icon-container mb-4">
                                <BsGearFill />
                            </div>
                            <Card.Title className="fw-bold" style={{ fontSize: '1.5rem', color: '#ffc107' }}>Configuraciones</Card.Title>
                            <Card.Text className="text-muted" style={{ fontSize: '1.5rem' }}> {/* Tamaño de letra unificado */}
                                Accede a configuraciones avanzadas del sistema.
                            </Card.Text>
                            <Button variant="outline-warning" className="rounded-pill" onClick={() => toggleInfo('settings')}>
                                {openInfo.settings ? 'Ocultar Información' : 'Más Información'}
                            </Button>
                            <Collapse in={openInfo.settings}>
                                <div className="mt-3 info-text">
                                    <p style={{ fontSize: '1.5rem' }}> {/* Tamaño de letra unificado */}
                                        Personaliza las preferencias de tu cuenta, gestiona notificaciones y establece límites de uso.
                                    </p>
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;

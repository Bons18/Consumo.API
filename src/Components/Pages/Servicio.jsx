import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import "../../styles/Servicios.css";

const Servicios = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentService, setCurrentService] = useState(null);

    const handleShow = (service) => {
        setCurrentService(service);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setCurrentService(null);
    };

    return (
        <Container fluid className="bg-light" style={{ minHeight: '100vh', paddingTop: '50px' }}>
            <h1 className="text-center mb-5 fw-bold text-dark" style={{
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: '700', 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
                fontSize: '2.5rem', 
            }}>
                Nuestros Servicios
            </h1>
            <Row className="justify-content-center">
                {servicesData.map((service, index) => (
                    <Col md={4} className="mb-4" key={index}>
                        <Card className={`shadow border-0 h-100 rounded-3 service-card bg-${service.color}`}>
                            <Card.Body className="d-flex flex-column p-4">
                                <div className="text-center mb-3">
                                    <FaInfoCircle className="fs-1 text-white" />
                                </div>
                                <Card.Title className="text-center fw-bold fs-5 mb-3 text-white">{service.title}</Card.Title>
                                <Card.Text className="text-white text-center mb-4">
                                    {service.description}
                                </Card.Text>
                                <Button 
                                    variant="outline-light" 
                                    onClick={() => handleShow(service)} 
                                    className="mt-auto w-100 rounded-pill py-2"
                                >
                                    Saber más
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {currentService && (
                <Modal show={showModal} onHide={handleClose} size="lg" className="modal-custom">
                    <Modal.Header closeButton>
                        <Modal.Title className="text-dark fw-bold">{currentService.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5 className="fw-bold">Descripción Completa</h5>
                        <p>{currentService.fullDescription}</p>
                        <h5 className="fw-bold">Beneficios</h5>
                        <ul>
                            {currentService.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                        <h5 className="fw-bold">¿Por qué elegir este servicio?</h5>
                        <p>{currentService.whyChoose}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    );
};

const servicesData = [
    {
        title: 'Gestión de Cuentas',
        description: 'Gestión integral de cuentas.',
        fullDescription: 'Ofrecemos un servicio de gestión integral de cuentas que incluye la organización y administración de tu información personal y financiera.',
        benefits: [
            'Ahorra tiempo y esfuerzo.',
            'Acceso fácil y rápido a tus datos.',
            'Soporte personalizado y eficiente.',
        ],
        whyChoose: 'Elegir nuestro servicio te garantiza tranquilidad y control total sobre tu información.',
        color: 'primary'
    },
    {
        title: 'Análisis de Rendimiento',
        description: 'Análisis de actividad y rendimiento.',
        fullDescription: 'Realizamos un análisis detallado de tu actividad y rendimiento, ayudándote a identificar áreas de mejora y optimización.',
        benefits: [
            'Informes detallados y fáciles de entender.',
            'Recomendaciones personalizadas.',
            'Mejora continua y seguimiento.',
        ],
        whyChoose: 'Con nosotros, no solo tendrás datos, tendrás insights que te impulsarán a mejorar.',
        color: 'success'
    },
    {
        title: 'Configuraciones Avanzadas',
        description: 'Configuraciones avanzadas del sistema.',
        fullDescription: 'Brindamos acceso a configuraciones avanzadas que te permiten personalizar tu experiencia según tus necesidades específicas.',
        benefits: [
            'Mayor control sobre la configuración del sistema.',
            'Opciones avanzadas para usuarios experimentados.',
            'Flexibilidad para adaptarse a tus requerimientos.',
        ],
        whyChoose: 'Este servicio es ideal para quienes buscan personalizar su experiencia al máximo.',
        color: 'warning'
    }
];

export default Servicios;

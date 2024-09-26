import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import { BsFillTelephoneFill, BsClockFill } from 'react-icons/bs';
import './Contacto.css'; // Estilos personalizados

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Datos enviados:', formData);
            setSuccess(true);
            setFormData({ nombre: '', email: '', mensaje: '' });
        } catch (error) {
            setError('Hubo un error al enviar el mensaje.');
        }
    };

    return (
        <Container fluid className="my-6" style={{ backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
            <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Col md={8} lg={6} className="mt-2"> {/* Cambiado a mt-2 para menos espacio */}
                    <Card className="shadow p-4 rounded" style={{ backgroundColor: 'white', borderRadius: '20px' }}>
                        <h1 className="text-center mb-4 fw-bold" style={{ color: '#333', fontSize: '2.5rem' }}>Contacto</h1>
                        {success && <Alert variant="success" className="text-center">¡Mensaje enviado exitosamente!</Alert>}
                        {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                        
                        <Form onSubmit={handleSubmit} className="mb-4">
                            <Form.Group controlId="formNombre" className="mb-4 position-relative">
                                <Form.Label><strong>Nombre</strong></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu nombre"
                                    required
                                    className="rounded-pill border-0 shadow-sm"
                                    style={{ backgroundColor: '#f9f9f9', height: '50px', fontSize: '1rem', paddingLeft: '50px' }}
                                />
                                <div className="position-absolute end-0 top-0 mt-3 me-3" style={{ color: '#007aff' }}>
                                    <FaUser />
                                </div>
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-4 position-relative">
                                <Form.Label><strong>Email</strong></Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu email"
                                    required
                                    className="rounded-pill border-0 shadow-sm"
                                    style={{ backgroundColor: '#f9f9f9', height: '50px', fontSize: '1rem', paddingLeft: '50px' }}
                                />
                                <div className="position-absolute end-0 top-0 mt-3 me-3" style={{ color: '#007aff' }}>
                                    <FaEnvelope />
                                </div>
                            </Form.Group>

                            <Form.Group controlId="formMensaje" className="mb-4 position-relative">
                                <Form.Label><strong>Mensaje</strong></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    placeholder="Escribe tu mensaje"
                                    rows={4}
                                    required
                                    className="rounded-pill border-0 shadow-sm"
                                    style={{ backgroundColor: '#f9f9f9', fontSize: '1rem', paddingLeft: '50px' }}
                                />
                                <div className="position-absolute end-0 top-0 mt-3 me-3" style={{ color: '#007aff' }}>
                                    <FaComment />
                                </div>
                            </Form.Group>

                            <Button 
                                variant="primary" 
                                type="submit" 
                                className="w-100 rounded-pill py-2" 
                                style={{ fontWeight: 'bold', fontSize: '1.1rem', backgroundColor: '#007aff', borderColor: '#007aff' }}
                            >
                                Enviar Mensaje
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col md={8} lg={6} className="mx-auto text-center">
                    <h2 className="fw-bold" style={{ color: '#333' }}>¿Por qué contactarnos?</h2>
                    <p className="text-muted">
                        Nuestro equipo está aquí para ayudarte. Ya sea que tengas preguntas sobre nuestros servicios, sugerencias o necesites asistencia, estamos disponibles para atenderte.
                    </p>

                    <div className="d-flex justify-content-around mb-4">
                        <div className="d-flex align-items-center">
                            <BsFillTelephoneFill className="fs-4 text-primary me-2" />
                            <div>
                                <h5 className="fw-bold">Información de Contacto</h5>
                                <p>Email: soporte@empresa.com</p>
                                <p>Teléfono: +1 (234) 567-890</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <BsClockFill className="fs-4 text-primary me-2" />
                            <div>
                                <h5 className="fw-bold">Horarios</h5>
                                <p>Lunes a Viernes: 9:00 AM - 5:00 PM</p>
                                <p>Sábado: 10:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contacto;

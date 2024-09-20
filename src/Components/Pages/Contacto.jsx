import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

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
        <Container fluid className="my-5" style={{ backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
            <Row>
                <Col md={8} lg={6} className="mx-auto">
                    <h1 className="text-center mb-4 fw-bold" style={{ color: '#333', fontSize: '2.5rem' }}>Contacto</h1>
                    {success && <Alert variant="success" className="text-center">¡Mensaje enviado exitosamente!</Alert>}
                    {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                    <Form onSubmit={handleSubmit} className="shadow p-5 rounded" style={{ backgroundColor: 'white', border: '1px solid #e0e0e0', borderRadius: '20px' }}>
                        <Form.Group controlId="formNombre" className="mb-4">
                            <Form.Label><strong>Nombre</strong></Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Ingresa tu nombre"
                                required
                                className="rounded-pill border-0 shadow-sm"
                                style={{ backgroundColor: '#f9f9f9', height: '50px', fontSize: '1rem', paddingLeft: '40px' }}
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
                                style={{ backgroundColor: '#f9f9f9', height: '50px', fontSize: '1rem', paddingLeft: '40px' }}
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
                                style={{ backgroundColor: '#f9f9f9', fontSize: '1rem', paddingLeft: '40px' }}
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
                </Col>
            </Row>
        </Container>
    );
};

export default Contacto;

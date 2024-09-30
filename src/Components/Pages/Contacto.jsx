import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import { BsFillTelephoneFill, BsClockFill } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../../styles/Contacto.css";

const Mapa = () => {
    const [map, setMap] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBjhJlV62iOik3qu-JOKA5Jt_6rq19mR4w&libraries=places`;
        script.async = true;
        script.onload = () => {
            const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 37.7749, lng: -122.4194 },
                zoom: 12,
            });
            setMap(mapInstance);
            
            const input = document.getElementById('search-input');
            const autocompleteInstance = new window.google.maps.places.Autocomplete(input);
            autocompleteInstance.bindTo('bounds', mapInstance);

            autocompleteInstance.addListener('place_changed', () => {
                const place = autocompleteInstance.getPlace();
                if (place.geometry) {
                    mapInstance.setCenter(place.geometry.location);
                    mapInstance.setZoom(15);
                    new window.google.maps.Marker({
                        position: place.geometry.location,
                        map: mapInstance,
                    });
                }
            });

            setAutocomplete(autocompleteInstance);
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const place = autocomplete.getPlace();
            if (place && place.geometry) {
                map.setCenter(place.geometry.location);
                map.setZoom(15);
                new window.google.maps.Marker({
                    position: place.geometry.location,
                    map: map,
                });
            } else {
                const geocoder = new window.google.maps.Geocoder();
                geocoder.geocode({ address: searchInput }, (results, status) => {
                    if (status === 'OK' && results[0]) {
                        map.setCenter(results[0].geometry.location);
                        map.setZoom(15);
                        new window.google.maps.Marker({
                            position: results[0].geometry.location,
                            map: map,
                        });
                    } else {
                        alert('No se pudo encontrar la ubicación: ' + status);
                    }
                });
            }
        }
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <h5 className="fw-bold">Ubicación</h5>
            <input
                id="search-input"
                type="text"
                placeholder="Buscar ubicación"
                className="form-control mb-3"
                style={{ borderRadius: '10px', padding: '10px' }}
                onKeyPress={handleKeyPress}
                value={searchInput}
                onChange={handleInputChange}
            />
            <div id="map" style={{ width: '100%', height: '250px', borderRadius: '10px' }}></div>
        </div>
    );
};

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
        <Container fluid className="my-0" style={{ backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
            <Row className="justify-content-center align-items-center" style={{ marginTop: '0' }}>
                <Col md={8} lg={6} className="mt-2">
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

            <Row className="mt-5 text-center">
                <Col md={8} lg={6} className="mx-auto">
                    <h2 className="fw-bold" style={{ color: '#333' }}>¿Por qué contactarnos?</h2>
                    <p className="text-muted">
                        Nuestro equipo está aquí para ayudarte. Ya sea que tengas preguntas sobre nuestros servicios, sugerencias o necesites asistencia, estamos disponibles para atenderte.
                    </p>

                    <div className="d-flex flex-column flex-md-row justify-content-around mb-4">
                        <div className="d-flex align-items-center mb-3 mb-md-0">
                            <BsFillTelephoneFill className="fs-4 text-primary me-2" />
                            <div>
                                <h5 className="fw-bold">Teléfono</h5>
                                <p className="text-muted">+1 234 567 890</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3 mb-md-0">
                            <BsClockFill className="fs-4 text-primary me-2" />
                            <div>
                                <h5 className="fw-bold">Horario</h5>
                                <p className="text-muted">Lunes a Viernes, 9am - 5pm</p>
                            </div>
                        </div>
                    </div>

                    <h5 className="fw-bold">Síguenos en Redes Sociales</h5>
                    <div className="d-flex justify-content-center mb-4">
                        <a href="#" className="me-3 text-decoration-none text-primary">
                            <FaFacebook size={30} />
                        </a>
                        <a href="#" className="me-3 text-decoration-none text-primary">
                            <FaTwitter size={30} />
                        </a>
                        <a href="#" className="text-decoration-none text-primary">
                            <FaInstagram size={30} />
                        </a>
                    </div>
                </Col>
            </Row>

            <Mapa />
        </Container>
    );
};

export default Contacto;

import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'; // Importa SweetAlert2

const NuevoClienteForm = () => {
    const [documentoCliente, setDocumentoCliente] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [celular, setCelular] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const nuevoCliente = { documentoCliente, nombreCompleto, celular, fechaNacimiento };

        try {
            const response = await fetch('https://bank-api-ukci.onrender.com/api/clientes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevoCliente),
            });

            if (!response.ok) {
                throw new Error('Error al crear cliente');
            }

            // Mostrar alerta de éxito
            Swal.fire({
                icon: 'success',
                title: 'Cliente Registrado',
                text: 'Cliente registrado exitosamente.',
                background: '#f5f5f7',
                color: '#333',
                confirmButtonColor: '#007aff',
                confirmButtonText: 'Aceptar',
                customClass: {
                    popup: 'custom-alert',
                },
            });

            // Limpiar el formulario después de enviar los datos
            setDocumentoCliente('');
            setNombreCompleto('');
            setCelular('');
            setFechaNacimiento('');
        } catch (error) {
            // Mostrar alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
                background: '#f5f5f7',
                color: '#333',
                confirmButtonColor: '#dc3545',
                confirmButtonText: 'Reintentar',
                customClass: {
                    popup: 'custom-alert',
                },
            });
        }
    };

    return (
        <Container className="my-5 p-5" style={{ backgroundColor: '#ffffff', borderRadius: '20px', boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)' }}>
            <h2 className="text-center mb-4" style={{ color: '#333', fontFamily: 'San Francisco, Arial, sans-serif' }}>Registrar Nuevo Cliente</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formNombre">
                    <Form.Label><strong>Nombre Completo:</strong></Form.Label>
                    <Form.Control
                        type="text"
                        value={nombreCompleto}
                        onChange={(e) => setNombreCompleto(e.target.value)}
                        required
                        placeholder="Ingresa el nombre completo"
                        style={{ borderRadius: '15px', border: '1px solid #e0e0e0', padding: '15px', fontSize: '1rem', backgroundColor: '#f9f9f9' }}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formDocumento">
                    <Form.Label><strong>Documento del Cliente:</strong></Form.Label>
                    <Form.Control
                        type="text"
                        value={documentoCliente}
                        onChange={(e) => setDocumentoCliente(e.target.value)}
                        required
                        placeholder="Ingresa el documento del cliente"
                        style={{ borderRadius: '15px', border: '1px solid #e0e0e0', padding: '15px', fontSize: '1rem', backgroundColor: '#f9f9f9' }}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formCelular">
                    <Form.Label><strong>Celular:</strong></Form.Label>
                    <Form.Control
                        type="tel"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        placeholder="Ingresa el número de celular"
                        style={{ borderRadius: '15px', border: '1px solid #e0e0e0', padding: '15px', fontSize: '1rem', backgroundColor: '#f9f9f9' }}
                    />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formFechaNacimiento">
                    <Form.Label><strong>Fecha de Nacimiento:</strong></Form.Label>
                    <Form.Control
                        type="date"
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                        required
                        style={{ borderRadius: '15px', border: '1px solid #e0e0e0', padding: '15px', fontSize: '1rem', backgroundColor: '#f9f9f9' }}
                    />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100" style={{ borderRadius: '25px', fontSize: '1.1rem', backgroundColor: '#007aff', border: 'none', padding: '10px' }}>Registrar Cliente</Button>
            </Form>
        </Container>
    );
};

export default NuevoClienteForm;

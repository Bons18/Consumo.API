import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './NuevoClienteForm.css';

const NuevoClienteForm = ({ onAgregarCliente }) => {
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

            const clienteCreado = await response.json();
<<<<<<< HEAD
            onAgregarCliente(clienteCreado);

=======

            // Llamamos a la función onAgregarCliente para actualizar la lista sin recargar
            onAgregarCliente(clienteCreado);

            // Mostrar alerta de éxito
>>>>>>> 87af38d2a808abaeacae0ec38f6988a8504b2745
            Swal.fire({
                icon: 'success',
                title: 'Cliente Registrado',
                text: 'Cliente registrado exitosamente.',
                background: '#f5f5f7',
                color: '#333',
                confirmButtonColor: '#007aff',
                confirmButtonText: 'Aceptar',
            });

            // Limpiar los campos del formulario
            setDocumentoCliente('');
            setNombreCompleto('');
            setCelular('');
            setFechaNacimiento('');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
                background: '#f5f5f7',
                color: '#333',
                confirmButtonColor: '#ff3b30',
                confirmButtonText: 'Aceptar',
<<<<<<< HEAD
=======
                customClass: {
                    popup: 'custom-alert',
                },
>>>>>>> 87af38d2a808abaeacae0ec38f6988a8504b2745
            });
        }
    };

    return (
        <Container className="py-5">
<<<<<<< HEAD
            <h2 className="text-center mb-4 nuevo-cliente-title">Nuevo Cliente</h2>
            <Form onSubmit={handleSubmit} className="p-4 rounded shadow form-custom">
=======
            <h2 className="text-center mb-4" style={{ fontWeight: '600', fontSize: '2.5rem', color: '#333' }}>
                Nuevo Cliente
            </h2>
            <Form onSubmit={handleSubmit} className="p-4 rounded shadow" style={{ backgroundColor: '#fff', maxWidth: '600px', margin: '0 auto' }}>
>>>>>>> 87af38d2a808abaeacae0ec38f6988a8504b2745
                <Form.Group controlId="documentoCliente" className="mb-3">
                    <Form.Label>Documento de Identidad</Form.Label>
                    <Form.Control
                        type="text"
                        value={documentoCliente}
                        onChange={(e) => setDocumentoCliente(e.target.value)}
                        required
<<<<<<< HEAD
                        placeholder="Ingrese el documento de identidad"
=======
                        style={{ borderRadius: '8px', borderColor: '#ccc' }}
>>>>>>> 87af38d2a808abaeacae0ec38f6988a8504b2745
                    />
                </Form.Group>

                <Form.Group controlId="nombreCompleto" className="mb-3">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                        type="text"
                        value={nombreCompleto}
                        onChange={(e) => setNombreCompleto(e.target.value)}
                        required
<<<<<<< HEAD
                        placeholder="Ingrese el nombre completo"
=======
                        style={{ borderRadius: '8px', borderColor: '#ccc' }}
>>>>>>> 87af38d2a808abaeacae0ec38f6988a8504b2745
                    />
                </Form.Group>

                <Form.Group controlId="celular" className="mb-3">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                        type="text"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                        required
<<<<<<< HEAD
                        placeholder="Ingrese el número de celular"
=======
                        style={{ borderRadius: '8px', borderColor: '#ccc' }}
>>>>>>> 87af38d2a808abaeacae0ec38f6988a8504b2745
                    />
                </Form.Group>

                <Form.Group controlId="fechaNacimiento" className="mb-3">
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control
                        type="date"
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                        required
<<<<<<< HEAD
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 btn-custom">
=======
                        style={{ borderRadius: '8px', borderColor: '#ccc' }}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100" style={{ borderRadius: '8px' }}>
>>>>>>> 87af38d2a808abaeacae0ec38f6988a8504b2745
                    Registrar Cliente
                </Button>
            </Form>
        </Container>
    );
};

export default NuevoClienteForm;

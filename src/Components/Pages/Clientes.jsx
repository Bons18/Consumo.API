import { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { FaEye, FaSync, FaTrash } from 'react-icons/fa';
import NuevoClienteForm from './NuevoCliente';

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
    const [isViewMode, setIsViewMode] = useState(false);
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        documentoCliente: '',
        celular: '',
        fechaNacimiento: ''
    });

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('https://bank-api-ukci.onrender.com/api/clientes', {
                    headers: { 'Content-Type': 'application/json' }
                });
                if (!response.ok) throw new Error(`Error al obtener clientes: ${response.statusText}`);
                const data = await response.json();
                setClientes(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchClientes();
    }, []);

    const handleCloseModal = () => setShowModal(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleActualizarCliente = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://bank-api-ukci.onrender.com/api/clientes/${clienteSeleccionado._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!response.ok) throw new Error(`Error al actualizar cliente: ${response.statusText}`);
            setClientes(clientes.map(cliente => cliente._id === clienteSeleccionado._id ? formData : cliente));
            handleCloseModal();
        } catch (error) {
            setError(error.message);
        }
    };

    const handleShowModalView = (cliente) => {
        setClienteSeleccionado(cliente);
        setFormData(cliente);
        setIsViewMode(true);
        setShowModal(true);
    };

    const handleShowModalUpdate = (cliente) => {
        setClienteSeleccionado(cliente);
        setFormData(cliente);
        setIsViewMode(false);
        setShowModal(true);
    };

    const handleEliminarCliente = async (id) => {
        try {
            const response = await fetch(`https://bank-api-ukci.onrender.com/api/clientes/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) throw new Error(`Error al eliminar cliente: ${response.statusText}`);
            setClientes(clientes.filter(cliente => cliente._id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleAgregarCliente = (nuevoCliente) => {
        setClientes([...clientes, nuevoCliente]);
    };

    return (
        <Container fluid className="py-5" style={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
            <NuevoClienteForm onAgregarCliente={handleAgregarCliente} />
            <h2 className="text-center mb-4" style={{ fontWeight: '600', fontSize: '2.5rem', color: '#333' }}>Clientes</h2>
            {error && <p className="text-danger">{error}</p>}
            <Table striped bordered hover className="mt-4 rounded shadow" style={{ backgroundColor: '#fff' }}>
                <thead style={{ backgroundColor: '#e0e0e0', fontWeight: '600' }}>
                    <tr>
                        <th>Nombre</th>
                        <th>Documento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente._id}>
                            <td>{cliente.nombreCompleto}</td>
                            <td>{cliente.documentoCliente}</td>
                            <td>
                                <Button variant="link" onClick={() => handleShowModalView(cliente)} className="text-primary me-2">
                                    <FaEye />
                                </Button>
                                <Button variant="link" onClick={() => handleShowModalUpdate(cliente)} className="text-secondary me-2">
                                    <FaSync />
                                </Button>
                                <Button variant="link" onClick={() => handleEliminarCliente(cliente._id)} className="text-danger">
                                    <FaTrash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton style={{ borderBottom: 'none' }}>
                    <Modal.Title>{isViewMode ? 'Ver Cliente' : 'Actualizar Cliente'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={isViewMode ? (e) => e.preventDefault() : handleActualizarCliente}>
                        {['nombreCompleto', 'documentoCliente', 'celular', 'fechaNacimiento'].map((field) => (
                            <Form.Group controlId={`form${field}`} key={field}>
                                <Form.Label>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    readOnly={isViewMode}
                                    required
                                    style={{ borderRadius: '8px', borderColor: '#ccc' }}
                                />
                            </Form.Group>
                        ))}
                        {!isViewMode && (
                            <Button variant="primary" type="submit" className="w-100" style={{ marginTop: '15px' }}>
                                Actualizar
                            </Button>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 'none' }}>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Clientes;

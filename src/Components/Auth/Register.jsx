import { useState } from "react";
import useHook from "./Hooks/Hooks";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, InputGroup } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa"; // Se añade FaUserCircle para el icono superior
import Swal from 'sweetalert2';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const { onHandleChange, onSubmit } = useHook();

    const onRegister = (e) => {
        e.preventDefault();
        onHandleChange({ nombre, correo, contrasena });
        
        // Alerta de confirmación
        Swal.fire({
            title: 'Registro exitoso',
            text: "Tu cuenta ha sido creada con éxito.",
            icon: 'success',
            confirmButtonColor: '#0d6efd',
            allowOutsideClick: false
        }).then(() => {
            navigate("/Login", { replace: true });
            onSubmit();
        });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card className="shadow-lg" style={{ maxWidth: '400px', width: '100%', borderRadius: '12px', border: 'none' }}>
                <Card.Body className="p-5">
                    {/* Icono de usuario encima del título */}
                    <div className="d-flex justify-content-center mb-4">
                        <FaUserCircle size={50} className="text-primary" />
                    </div>
                    <h3 className="text-center mb-4 fw-bold" style={{ color: '#0d6efd' }}>Crea una Cuenta</h3>
                    <p className="text-center text-muted mb-4">Regístrate para empezar</p>
                    <Form onSubmit={onRegister}>
                        {/* Campo de nombre con icono */}
                        <Form.Group className="mb-4" controlId="formNombre">
                            <Form.Label>Nombre Completo</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="bg-light border-0">
                                    <FaUser className="text-primary" />
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Introduce tu nombre completo"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                    className="rounded-pill border-0 shadow-sm"
                                />
                            </InputGroup>
                        </Form.Group>

                        {/* Campo de correo con icono */}
                        <Form.Group className="mb-4" controlId="formCorreoRegistro">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="bg-light border-0">
                                    <FaEnvelope className="text-primary" />
                                </InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="Introduce tu correo"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                    className="rounded-pill border-0 shadow-sm"
                                />
                            </InputGroup>
                        </Form.Group>

                        {/* Campo de contraseña con icono */}
                        <Form.Group className="mb-4" controlId="formContrasenaRegistro">
                            <Form.Label>Contraseña</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="bg-light border-0">
                                    <FaLock className="text-primary" />
                                </InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    placeholder="Introduce tu contraseña"
                                    value={contrasena}
                                    onChange={(e) => setContrasena(e.target.value)}
                                    required
                                    className="rounded-pill border-0 shadow-sm"
                                />
                            </InputGroup>
                        </Form.Group>

                        <Button 
                            variant="primary" 
                            type="submit" 
                            className="w-100 rounded-pill py-2 shadow"
                            style={{ fontWeight: 'bold' }}
                        >
                            Registrarse
                        </Button>
                    </Form>
                    <p className="text-center text-muted mt-3">
                        ¿Ya tienes una cuenta? 
                        <a href="/Login" className="text-primary" style={{ fontWeight: 'bold' }}> Inicia sesión</a>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Register;

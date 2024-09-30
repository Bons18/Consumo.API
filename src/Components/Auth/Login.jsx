import { useContext, useState, useEffect } from "react";
import useHook from "./Hooks/Hooks";
import { UseLoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, InputGroup } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa";
import Swal from 'sweetalert2';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const loginLocalStorage = JSON.parse(localStorage.getItem("Ingreso"));
    const { onLoginAccess } = useContext(UseLoginContext);
    const { onSubmit } = useHook();

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    useEffect(() => {
        // Se aplica animación de entrada al componente
        const card = document.querySelector('.card');
        if (card) {
            card.classList.add('animate');
        }
    }, []);

    const onLogin = (e) => {
        e.preventDefault();
        
        if (!loginLocalStorage) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encontraron datos de inicio de sesión.',
                background: '#f5f5f7',
                color: '#333',
                confirmButtonColor: '#007aff',
                confirmButtonText: 'Aceptar',
                customClass: {
                    popup: 'custom-alert',
                    title: 'alert-title',
                    content: 'alert-content',
                },
            });
        } else if (correo === loginLocalStorage.correo && contrasena === loginLocalStorage.contrasena) {
            onLoginAccess(loginLocalStorage);
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                text: 'Inicio de sesión exitoso!',
                background: '#f5f5f7',
                color: '#333',
                confirmButtonColor: '#007aff',
                confirmButtonText: 'Continuar',
                customClass: {
                    popup: 'custom-alert',
                    title: 'alert-title',
                    content: 'alert-content',
                },
            }).then(() => {
                navigate("/Clientes", { replace: true });
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Correo o contraseña incorrectos.',
                background: '#f5f5f7',
                color: '#333',
                confirmButtonColor: '#007aff',
                confirmButtonText: 'Reintentar',
                customClass: {
                    popup: 'custom-alert',
                    title: 'alert-title',
                    content: 'alert-content',
                },
            });
        }
        onSubmit();
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card className="shadow-lg card" style={{ maxWidth: '400px', width: '100%', borderRadius: '12px' }}>
                <Card.Body className="p-5">
                    <div className="text-center mb-3">
                        <FaUserCircle size={60} color="#0d6efd" />
                    </div>
                    <h3 className="text-center mb-4 fw-bold" style={{ color: '#0d6efd' }}>Bienvenido</h3>
                    <p className="text-center text-muted mb-4">Inicia sesión para continuar</p>
                    <Form onSubmit={onLogin}>
                        <Form.Group className="mb-4" controlId="formCorreoLogin">
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

                        <Form.Group className="mb-4" controlId="formContrasenaLogin">
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
                            Acceder
                        </Button>
                    </Form>
                    <p className="text-center text-muted mt-3">
                        ¿No tienes una cuenta? 
                        <a href="/Register" className="text-primary" style={{ fontWeight: 'bold' }}> Regístrate</a>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;

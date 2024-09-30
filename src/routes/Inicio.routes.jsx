import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { UseLoginContext } from "../Components/Context/LoginContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './Inicio.routes.css'; 


const InicioRouters = () => {
    const { login, isLogin, onLogOut } = useContext(UseLoginContext);
    const [navExpanded, setNavExpanded] = useState(false);

    const handleLogout = () => {
        Swal.fire({
            title: '¿Quieres cerrar sesión?',
            text: "Esta acción te desconectará.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#007aff',
            cancelButtonColor: '#d3d3d3',
            confirmButtonText: 'Sí, salir',
            cancelButtonText: 'Cancelar',
            background: '#ffffff',
            backdrop: true,
            allowOutsideClick: false,
            customClass: {
                title: 'swal-title',
                confirmButton: 'swal-button-confirm',
                cancelButton: 'swal-button-cancel',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                onLogOut();
                Swal.fire({
                    title: '¡Sesión cerrada!',
                    text: 'Has cerrado sesión correctamente.',
                    icon: 'success',
                    background: '#ffffff',
                    confirmButtonColor: '#007aff',
                    customClass: {
                        title: 'swal-title',
                        confirmButton: 'swal-button-confirm',
                    }
                });
            }
        });
    };

    const handleNavItemClick = () => {
        setNavExpanded(false);
    };

    return (
        <>
            <Navbar expanded={navExpanded} expand="lg" className="bg-white shadow-sm py-3 custom-navbar">
                <Container fluid>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setNavExpanded(prev => !prev)}
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/660/660611.png"
                                width="40"
                                height="40"
                                className="me-2"
                                alt="Logo"
                            />
                            <span className="fw-bold fs-5 text-dark">
                                {isLogin ? login.nombre : 'Bienvenido'}
                            </span>
                        </Navbar.Brand>
                        <Nav className="ms-auto">
                            {[
                                { path: '/', title: 'Inicio', icon: 'fas fa-home' },
                                { path: '/Servicio', title: 'Servicio', icon: 'fas fa-cogs' },
                                { path: '/Contacto', title: 'Contacto', icon: 'fas fa-envelope' },
                                { path: '/Clientes', title: 'Clientes', icon: 'fas fa-users' },
                                { path: '/Dashboard', title: 'Dashboard', icon: 'fas fa-tachometer-alt' },
                                { path: '/Login', title: 'Acceder', icon: 'fas fa-sign-in-alt', condition: !isLogin },
                                { path: '/Register', title: 'Registro', icon: 'fas fa-user-plus', condition: !isLogin }
                            ].map((item, index) => {
                                const isActive = item.condition === undefined ? isLogin : item.condition;

                                return isActive && (
                                    <Nav.Link
                                        key={index}
                                        as={Link}
                                        to={item.path}
                                        className="text-primary mx-2 fw-semibold nav-item"
                                        onClick={handleNavItemClick}
                                    >
                                        <i className={`${item.icon} me-1`}></i>
                                        {item.title}
                                    </Nav.Link>
                                );
                            })}
                        </Nav>
                        {isLogin && (
                            <Button
                                variant="outline-danger"
                                onClick={handleLogout}
                                className="rounded-pill py-2 px-3 border-danger d-flex align-items-center position-relative overflow-hidden transition-all"
                                style={{ fontWeight: 'bold', transition: 'transform 0.3s' }}
                            >
                                <i className="fas fa-sign-out-alt me-2"></i>
                                Salir
                            </Button>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="min-vh-100">
                <Outlet />
            </div>
        </>
    );
};

export default InicioRouters;

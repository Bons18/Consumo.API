import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UseLoginContext } from "../Components/Context/LoginContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Asegúrate de importar Font Awesome

const InicioRouters = () => {
    const { login, isLogin, onLogOut } = useContext(UseLoginContext);
    
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

    return (
        <>
            <Navbar expand="lg" className="bg-light shadow-sm py-3">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                            <img
                                // Aquí se ha reemplazado el logo
                                src="https://cdn.pixabay.com/photo/2023/09/22/15/45/panda-8269336_960_720.png"
                                width="40"
                                height="40"
                                className="rounded-circle me-2"
                                alt="Logo"
                            />
                            <span className="fw-bold fs-5 text-dark">
                                {isLogin ? login.nombre : 'Bienvenido'}
                            </span>
                        </Navbar.Brand>
                        <Nav className="ms-auto">
                            {['/', '/Servicio', '/Contacto', '/Login', '/Register', '/Clientes', '/Dashboard'].map((path, index) => {
                                const titles = ['Inicio', 'Servicio', 'Contacto', 'Acceder', 'Registro', 'Clientes', 'Dashboard'];
                                const isActive = path === '/Login' || path === '/Register' ? !isLogin : isLogin;
                                
                                return isActive && (
                                    <Nav.Link 
                                        key={index} 
                                        as={Link} 
                                        to={path} 
                                        className="text-primary mx-2 fw-semibold"
                                        onMouseEnter={e => e.target.style.color = '#0056b3'}
                                        onMouseLeave={e => e.target.style.color = '#007aff'}
                                    >
                                        {titles[index] === 'Acceder' && (
                                            <>
                                                <i className="fas fa-sign-in-alt me-1"></i>
                                                {titles[index]}
                                            </>
                                        )}
                                        {titles[index] === 'Registro' && (
                                            <>
                                                <i className="fas fa-user-plus me-1"></i>
                                                {titles[index]}
                                            </>
                                        )}
                                        {titles[index] !== 'Acceder' && titles[index] !== 'Registro' && titles[index]}
                                    </Nav.Link>
                                );
                            })}
                        </Nav>
                        {isLogin && (
                            <Button 
                                variant="outline-danger" 
                                onClick={handleLogout} 
                                className="rounded-pill py-2 px-3 border-danger"
                            >
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

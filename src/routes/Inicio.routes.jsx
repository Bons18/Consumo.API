import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UseLoginContext } from "../Components/Context/LoginContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Swal from 'sweetalert2';

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
            <Navbar expand="lg" style={{ backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)', padding: '10px 20px' }}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                            <img
                                src={isLogin ? `https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4/${login.nombre}` : "https://cdn-icons-png.flaticon.com/512/3781/3781699.png"}
                                width="40"
                                height="40"
                                style={{ borderRadius: '50%', marginRight: '10px', transition: 'transform 0.3s' }}
                                alt="Logo"
                            />
                            <span style={{ fontWeight: '600', fontSize: '1.5rem', color: '#333', transition: 'color 0.3s' }}>
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
                                        style={{
                                            fontWeight: '500', 
                                            color: '#007aff', 
                                            margin: '0 10px', 
                                            transition: 'color 0.3s',
                                        }}
                                        onMouseEnter={e => e.target.style.color = '#0056b3'}
                                        onMouseLeave={e => e.target.style.color = '#007aff'}
                                    >
                                        {titles[index]}
                                    </Nav.Link>
                                );
                            })}
                        </Nav>
                        {isLogin && (
                            <Button 
                                variant="outline-danger" 
                                onClick={handleLogout} 
                                style={{ 
                                    borderRadius: '25px', 
                                    padding: '5px 20px', 
                                    border: '1px solid #ff3b30', 
                                    transition: 'background-color 0.3s, color 0.3s' 
                                }}
                            >
                                Salir
                            </Button>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default InicioRouters;

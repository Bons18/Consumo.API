import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaChevronRight, FaShieldAlt, FaMoneyBillWave, FaPiggyBank, FaChartLine, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs"; 
import { motion } from 'framer-motion';
import "../../styles/inicio.css";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ServiceCard = ({ icon: Icon, title, description }) => (
    <motion.div 
        className="col-xs-12 col-md-4 mb-4"
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5 }}
    >
        <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column align-items-center text-center">
                <Icon className="mb-3 text-primary" size={48} />
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    </motion.div>
);

const Inicio = () => {
    return (
        <div className="py bg-light">
            <motion.div
                className="container-fluid text-center py-5 bg-primary text-white"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h1 className="mb-4 fw-bold">Bienvenido a Bancorazón</h1>
                        <p className="lead mb-4">
                            Su socio financiero de confianza para un futuro seguro y próspero. 
                            Descubra nuestras soluciones bancarias personalizadas para cumplir sus sueños financieros.
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button 
                                    variant="light" 
                                    href="/abrir-cuenta" 
                                    className="px-4 py-2 fw-bold text-primary"
                                    aria-label="Abrir una cuenta"
                                >
                                    Abrir una cuenta <FaChevronRight className="ms-2" />
                                </Button>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button 
                                    variant="outline-light" 
                                    href="/servicios" 
                                    className="px-4 py-2 fw-bold"
                                    aria-label="Conocer más servicios"
                                >
                                    Conocer más <FaChevronRight className="ms-2" />
                                </Button>
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </motion.div>

            <Container fluid className="py-5">
                <motion.h2 
                    className="text-center mb-5 text-primary fw-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Nuestros Servicios Principales
                </motion.h2>
                <Row>
                    {[ 
                        { icon: FaShieldAlt, title: "Seguridad Garantizada", description: "Protegemos sus activos con los más altos estándares de seguridad del sector." },
                        { icon: FaMoneyBillWave, title: "Préstamos Personalizados", description: "Ofrecemos soluciones de financiamiento adaptadas a sus necesidades específicas con tasas competitivas." },
                        { icon: FaPiggyBank, title: "Ahorro Inteligente", description: "Maximice sus ahorros con nuestras cuentas de alto rendimiento y asesoramiento experto." },
                    ].map((service) => (
                        <ServiceCard 
                            key={service.title} 
                            icon={service.icon} 
                            title={service.title} 
                            description={service.description} 
                        />
                    ))}
                </Row>
            </Container>

            <Container fluid className="py-5 bg-light">
                <Row className="justify-content-center">
                    <Col md={10}>
                        <Row className="align-items-center">
                            <Col md={6} className="mb-4 mb-md-0">
                                <motion.h2 
                                    className="fw-bold mb-3 text-primary"
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    Invierta en su futuro
                                </motion.h2>
                                <motion.p
                                    className="mb-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    Nuestros expertos en inversiones están listos para ayudarle a construir una cartera sólida y diversificada. 
                                    Desde acciones hasta fondos mutuos, tenemos las herramientas para hacer crecer su patrimonio.
                                </motion.p>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Button 
                                        variant="primary" 
                                        href="https://wa.me/+573044570592" 
                                        target="_blank"
                                        className="px-4 py-2 fw-bold"
                                        aria-label="Consultar a un asesor"
                                    >
                                        Consultar a un asesor <FaChevronRight className="ms-2" />
                                    </Button>
                                </motion.div>
                            </Col>
                            <Col md={6}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Card className="shadow-sm">
                                        <Card.Body className="text-center">
                                            <FaChartLine className="mb-3 text-primary" size={64} />
                                            <Card.Title className="fw-bold">Rendimientos Históricos</Card.Title>
                                            <Card.Text>
                                                Nuestros fondos de inversión han superado consistentemente los índices de mercado en los últimos 5 años.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <motion.div
                className="container-fluid text-center py-5 bg-primary text-white"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2 className="fw-bold mb-3">¿Listo para asegurar su futuro financiero?</h2>
                        <p className="lead mb-4">
                            Únase a miles de clientes satisfechos que confían en Banco Confianza para sus necesidades financieras.
                        </p>
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button 
                                variant="light" 
                                href="/abrir-cuenta" 
                                className="px-4 py-2 fw-bold text-primary"
                                aria-label="Abrir una cuenta ahora"
                            >
                                Abrir una cuenta ahora <FaChevronRight className="ms-2" />
                            </Button>
                        </motion.div>
                    </Col>
                </Row>
            </motion.div>

            <footer className="bg-dark text-white py-4 mt-auto">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p className="mb-0">
                                &copy; 2024 Banco Confianza. Todos los derechos reservados.
                                <br />
                                <a href="/politicas" className="text-white">Política de privacidad</a> | Entidad regulada por la Superintendencia de Banca y Seguros.
                            </p>
                            <div className="social-icons">
                                <motion.a 
                                    href="https://facebook.com"
                                    whileHover={{ scale: 1.2 }}
                                    className="text-white mx-2"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF size={24} />
                                </motion.a>
                                <motion.a 
                                    href="https://x.com"
                                    whileHover={{ scale: 1.2 }}
                                    className="text-white mx-2"
                                    aria-label="Twitter"
                                >
                                    <BsTwitterX size={24} />
                                </motion.a>
                                <motion.a 
                                    href="https://instagram.com"
                                    whileHover={{ scale: 1.2 }}
                                    className="text-white mx-2"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={24} />
                                </motion.a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Inicio;

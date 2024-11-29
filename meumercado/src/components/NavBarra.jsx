import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

const NavBarra = () => {
  const usuarioNome = localStorage.getItem("userName");

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const [activeButton, setActiveButton] = useState(location.pathname);

  if (isLoginPage) {
    return null;
  }

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  return (
    <div>
      <Navbar expand="lg" bg="warning" variant="white">
        <Container>
          {/* Logo da empresa */}
          <Navbar.Brand href="/home" className="d-flex align-items-center">
            <img
              src="https://www.softisa.com.br/wp-content/uploads/2020/01/Logo-Doce-Del%C3%ADcia.png"
              alt="Logo Super Doces"
              style={{ width: "90px", height: "90px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="minha-nav" />

          <Navbar.Collapse id="minha-nav" className="justify-content-center">
           
            <Nav>
              <Nav.Link
                href="/home"
                onClick={() => handleButtonClick("/home")}
                className={`nav-item ${
                  activeButton === "/home" ? "active-button" : ""
                }`}
              >
                Páginas de Produtos
              </Nav.Link>
              <Nav.Link
                href="/produto/cadastrar"
                onClick={() => handleButtonClick("/produto/cadastrar")}
                className={`nav-item ${
                  activeButton === "/produto/cadastrar" ? "active-button" : ""
                }`}
              >
                Cadastrar Produtos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Área do usuário e sair */}
          <Nav className="ms-auto d-flex align-items-center">
            <Navbar.Text className="me-2" style={{ color: "dark" }}>
              Usuário: {usuarioNome}
            </Navbar.Text>
            <Nav.Link
              href="/login"
              className="logout-button"
              style={{
                backgroundColor: "#dc3545", 
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "1px solid #dc3545",
                textAlign: "center",
              }}
            >
              Sair
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Estilo do botão ativo */}
      <style jsx>{`
        .active-button {
          background-color: #d39e00 !important;
          color: #fff !important;
          border-radius: 5px;
        }
        .nav-item {
          margin: 0 10px;
        }
        .logout-button:hover {
          background-color: #c82333;
          border-color: #bd2130;
        }
      `}</style>
    </div>
  );
};

export default NavBarra;

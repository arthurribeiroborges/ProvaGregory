import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";

const NavBarra = () => {
  const usuarioNome = localStorage.getItem("userName");

  // Verifica se a página atual é a de login
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    // Se for a página de login, não exibe a navbar
    return null;
  }

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          {/* Logo da empresa como imagem */}
          <img
            src="https://www.softisa.com.br/wp-content/uploads/2020/01/Logo-Doce-Del%C3%ADcia.png" // Substitua pelo caminho correto da sua imagem
            alt="Logo Super Doces"
            style={{ width: "80px", height: "80px" }} // Ajuste o tamanho conforme necessário
          />
          {/* Texto do nome da marca */}
          <Navbar.Brand href="/home"></Navbar.Brand>

          {/* Toggle para dispositivos móveis */}
          <Navbar.Toggle aria-controls="minha-nav" />

          {/* Colapsa o menu quando a tela é pequena */}
          <Navbar.Collapse id="minha-nav">
            {/* Itens de navegação */}
            <Nav className="me-auto">
              <Nav.Link href="/home" className="active">
                Páginas de Produtos
              </Nav.Link>
              <Nav.Link href="/produto/cadastrar">Cadastrar Produtos</Nav.Link>
            </Nav>
            {/* Área do usuário e sair */}
            <Nav className="justify-content-end">
              <Navbar.Text style={{ color: "white" }}>
                Usuário: {usuarioNome} |
              </Navbar.Text>
              <Nav.Link href="/login">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarra;

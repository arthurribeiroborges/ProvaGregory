import React, { useState } from "react";
import { Button, FloatingLabel, Form, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  const navigate = useNavigate();

  // Função para salvar usuário no localStorage
  const gravarUsuario = () => {
    const novoUsuario = { nome, email, senha };
    localStorage.setItem("usuario", JSON.stringify(novoUsuario));
  };

  // Função para tratar o cadastro
  const handleCadastro = (e) => {
    e.preventDefault();

    // Validação dos campos
    if (!nome || !email || !senha || !confirmarSenha) {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("Todos os campos são obrigatórios.");
      return;
    }

    if (senha !== confirmarSenha) {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("As senhas não coincidem.");
      return;
    }

    // Salva o usuário no localStorage
    gravarUsuario();

    setAlertClass("mb-3 mt-2");
    setAlertVariant("success");
    setAlertMensagem("Cadastro realizado com sucesso.");
    alert("Cadastro realizado com sucesso");

    // Redireciona para a página de login
    navigate("/login");
  };

  return (
    <div>
      <Container style={{ height: "100vh" }} className="justify-content-center align-content-center">
        {/* Substituindo o ícone pela logo */}
        <img
          src="https://www.softisa.com.br/wp-content/uploads/2020/01/Logo-Doce-Del%C3%ADcia.png"  // Caminho para a logo, substitua com o caminho real
          alt="Logo"
          style={{ width: "200px", marginBottom: "20px" }} // Ajuste o tamanho da logo conforme necessário
        />

        <Form style={{ width: "75%", margin: "auto" }} onSubmit={handleCadastro}>
          {/* Campo nome */}
          <FloatingLabel controlId="floatingNome" label="Nome" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </FloatingLabel>

          {/* Campo email */}
          <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>

          {/* Campo senha */}
          <FloatingLabel controlId="floatingSenha" label="Senha" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </FloatingLabel>

          {/* Campo confirmar senha */}
          <FloatingLabel controlId="floatingConfirmarSenha" label="Confirmar Senha" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirmar Senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </FloatingLabel>

          {/* Alerta de erro */}
          <Alert variant={alertVariant} className={alertClass}>
            {alertMensagem}
          </Alert>

          {/* Botão de cadastrar com cor amarela */}
          <Button variant="warning" type="submit" className="mt-4" size="lg">
            Cadastrar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Cadastro;

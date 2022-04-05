import { Container, Form, Button } from "react-bootstrap";
import { loginEmailPassword } from "../../functions/loginEmailPassword";

const Login = () => {
  async function submitHandle(e) {
    e.preventDefault();
    const correo = e.target.formCorreo.value;
    const contraseña = e.target.formContraseña.value;
    loginEmailPassword(correo, contraseña);
  }

  return (
    <Container>
      <h1>Inicia sesión, por favor.</h1>
      <Form onSubmit={submitHandle}>
        <Form.Group controlId="formCorreo">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Ingrese su correo electronico"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formContraseña">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
};

export { Login };

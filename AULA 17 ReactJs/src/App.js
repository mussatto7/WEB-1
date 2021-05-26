import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {Button, Alert, Container, Navbar, Col, Row, Media, Form, FormGroup} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="Conteudo">
      <div className="App-content">
      <Container>
      <header className="topo">
      <h1>Cabeçalho</h1>        
      </header>
      </Container>

      <Navbar className="bar">Menu</Navbar>
      
      <Container>
      <main>
        <Alert variant="secondary">Este é um botão do React Bootstrap</Alert>
        <Button variant="dark">Botão de Alerta</Button>
      
      <hr></hr>

      <h2>Sistema de Grid</h2>
      <Row className="mb-5 mt-5">
        <Col>
          <Media>
            <img src="https://picsum.photos/200/80" alt=""/>
          </Media>
        </Col>
        <Col>
          <Media>
            <img src="https://via.placeholder.com/80x80.png" alt="" />
          </Media>
        </Col>
        <Col>3 coluna</Col>
      </Row>


      <h2>Formulários</h2>

      <Form>
      <Row>        
          <Col>
          <FormGroup controlId="formNome">
            <Form.Label>Nome Completo:</Form.Label>
            <Form.Control type="text" placeholder="Digite seu Nome"/>
            <Form.Text className="text-muted">
              Use somente letras minúsculas
            </Form.Text>
          </FormGroup>
          </Col>

          <Col>
          <FormGroup controlId="formEmail">
            <Form.Label>Seu Email:</Form.Label>
            <input type="email" placeholder="Aqui você coloca seu email" className="formulario mb-2"></input>
          </FormGroup>
          </Col>
          </Row>
         
          <Row>
          <Col>
          <FormGroup controlId="formSenha">
            <Form.Label>Sua Senha:</Form.Label>
            <input type="password" placeholder="Digite sua senha" className="formulario mb-2"></input>
          </FormGroup>
          </Col>          

          <Col>
          <FormGroup controlId="formVerificar">
            <Form.Check type="checkbox" label="Clique-me"/>
          </FormGroup>
          </Col>

          <Col>
          <FormGroup controlId="formArquivo">
            <Form.File label="Selecione o seu Arquivo para fazer Upload"/>
          </FormGroup>
          </Col> 
      </Row>
      <Row>
        <div className="menu">
          <a href="#">Este é um botão</a>
        </div>
      </Row>
      </Form>

      <hr></hr>




      </main>
      </Container>


      <footer className="rodape">Rodapé</footer>
      </div>
    </div>
  );
}

export default App;
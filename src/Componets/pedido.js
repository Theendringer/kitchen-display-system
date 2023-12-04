import Navbar from './navbar'
//import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
//import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';







import Nav from 'react-bootstrap/Nav';

function TabsExample() {
    return (
        <>
            <Navbar />

            <div className='container'>
                <Image src="bannerpedidos.jpg" fluid rounded />
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/pedidoTeste">Lanches</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/porcoes">Porções</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/bebidas">Bebidas</Nav.Link>
                    </Nav.Item>

                </Nav>

                <Form className='my-2'>
                <Row>
                <Col>
                    <Form.Check 
                        type="switch"
                        id="produto"
                        label="X-bacon"
                    />
                    </Col>
                    </Row>

                    <Card>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Nome do cliente" id='' />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Número da Mesa" id='' type='number' />
                            </Col>
                        </Row>
                        <Form.Label htmlFor="inputPassword5" className='mx-3'> Observações</Form.Label>
                        <Form.Control type="text" id="obs" aria-describedby="passwordHelpBlock" />
                    </Card>
                </Form>




                <Button variant="success">Enviar pedido</Button>


            </div>
        </>
    );
}

export default TabsExample;



import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
//import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
//import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function getDateTime() {
    const currentDate = new Date();

    // Obtendo os valores separados: ano, mês, dia, hora, minuto, segundo
    
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // +1 porque os meses começam em zero
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    // Formatando a data e hora como uma string
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

    return formattedDateTime;
}







function CriarPedido() {
    const [produto, setNomeProduto] = useState(''); // Estado para armazenar o nome do produto selecionado
    const [observacoes, setObservacoes] = useState('');
    const [numeroMesa, setNumeroMesa] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const newPedido = {
                produto,
                observacoes,
                numeroMesa: parseInt(numeroMesa),
                nomeCliente,
                dataCriacao: getDateTime(),
                status: "criado"
            };

            const response = await axios.post('http://kds.mysql.database.azure.com/pedido', newPedido);

            if (response.status === 201) {
                console.log('Novo pedido criado com sucesso!');
            }
        } catch (error) {
            console.error('Erro ao criar pedido:', error);
        }

        
    };


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

                <Form onSubmit={handleFormSubmit} className='my-2'>

                <Form.Label>Item pedido</Form.Label>
                <Form.Control placeholder="Produto" type="text" value={produto} onChange={(e) => setNomeProduto(e.target.value)} />

                    <Card className='my-3'>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Nome do cliente" type="text" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Número da Mesa" type="number" value={numeroMesa} onChange={(e) => setNumeroMesa(e.target.value)} />
                            </Col>
                        </Row>
                        <Form.Label htmlFor="inputPassword5" className='mx-3'> Observações</Form.Label>
                        <Form.Control type="text" value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
                    </Card>
                    <button type="submit">Criar Pedido</button>
                </Form>
            </div>
        </>
    );
}

export default CriarPedido;

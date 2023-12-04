import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from './navbar';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
//import io from 'socket.io-client';

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



function KitchenSinkExample() {
  const [pedidos, setPedidos] = useState([]);



  useEffect(() => {
    const getPedidos = async () => {
      try {
        const response = await axios.get('http://kds.mysql.database.azure.com/pedidos');

        // Filtrando os pedidos com status "criado"
        const pedidosCriados = response.data.filter((pedido) => pedido.status === 'concluido');
        
        setPedidos(pedidosCriados);
        console.log(pedidosCriados);
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    };

    getPedidos();

    const interval = setInterval(getPedidos, 10000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  

  const pedidoEntregue = async (id) => {
    try {
      await axios.put(`http://kds.mysql.database.azure.com/pedido/${id}`, 
      { status: 'entregue',
        dataFim: getDateTime()
    });

      const pedidosAtualizados = pedidos.map((pedido) => {
        if (pedido.id === id) {
          return { ...pedido, status: 'entregue' };
        }
        return pedido;
      });

      setPedidos(pedidosAtualizados);

      console.log(`Pedido ${id} marcado como concluído.`);
      window.location.reload();
    } catch (error) {
      console.error('Erro ao marcar pedido como concluído:', error);
    }
  };


  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='cozinha'>
          {pedidos.map((pedido, index) => (
            <Card key={index} style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>{pedido.produto}</Card.Title>
                <Card.Text>{pedido.observacoes}</Card.Text>
                <Card.Text>{pedido.nomeCliente}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Mesa {pedido.numeroMesa}</ListGroup.Item>
                <ListGroup.Item>{pedido.dataCriacao}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="secondary" onClick={() => pedidoEntregue(pedido.id)}>Pedido Entregue</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default KitchenSinkExample;

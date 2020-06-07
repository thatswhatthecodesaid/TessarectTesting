import React from 'react'
import {Button, Card} from 'react-bootstrap/Button'


class Question extends React.Component{

    render(){
        return (<Card style={{ width: 'auto' }}>
  <Card.Body>
    <Card.Title>Question</Card.Title>
    <Card.Text>
        This is a Sample Question
    </Card.Text>
    <ListGroup variant="flush">
        <ListGroup.Item>Option 1</ListGroup.Item>
        <ListGroup.Item>Option 2</ListGroup.Item>
        <ListGroup.Item>Option 3</ListGroup.Item>
        <ListGroup.Item>Option 4</ListGroup.Item>

    </ListGroup>
    <Button variant="primary">Next</Button>
  </Card.Body>
</Card>);
    }
}

export default Question;
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const dummyData = [
  { id: 1, name: 'Bilal', email: 'bilal@example.com', phone: '555-555-1234', category: 'Category A', owner: 'Owner A', image: 'https://picsum.photos/300' },
  { id: 2, name: 'Liaquat', email: 'liaquat@example.com', phone: '555-555-5678', category: 'Category B', owner: 'Owner B', image: 'https://picsum.photos/300' },
  { id: 3, name: 'Mughees', email: 'mughees@example.com', phone: '555-555-9012', category: 'Category C', owner: 'Owner C', image: 'https://picsum.photos/300' },
];

function UserCard({ user }) {
  return (
    <Col xs={12} md={4} style={{ marginBottom: '1rem' }}>
      <Card className="user-card" >
        <Card.Img variant="top" src={user.image} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          <Card.Text>{user.category}</Card.Text>
          <Card.Text>{user.owner}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

function UserCardList({ users }) {
  return (
    <Row>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </Row>
  );
}

function CardComp() {
  const [users, setUsers] = React.useState(dummyData);

  return (
    <div className="App" >
      <UserCardList users={users} />
    </div>
  );
}

export default CardComp;

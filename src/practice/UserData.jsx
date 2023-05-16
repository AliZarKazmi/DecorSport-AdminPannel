import React from 'react';
import { Table, Image, Button } from 'react-bootstrap';

const dummyData = [
  { id: 1, name: 'Ali Zar', email: 'alizar@example.com', phone: '555-555-1234', image: 'https://picsum.photos/50' },
  { id: 2, name: 'Safeer Ali', email: 'safeer@example.com', phone: '555-555-5678', image: 'https://picsum.photos/50' },
  { id: 3, name: 'Aun Ali', email: 'aunali@example.com', phone: '555-555-9012', image: 'https://picsum.photos/50' },
];

function UserTable({ users, deleteUser }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td><Image src={user.image} roundedCircle width={50} height={50} /></td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

function UserData() {
  const [users, setUsers] = React.useState(dummyData);

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="App">
      <UserTable users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default UserData;

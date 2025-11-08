import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudExample = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  // READ
  useEffect(() => {
    axios.get('/api/users').then(res => setUsers(res.data.users));
  }, []);

  // CREATE
  const addUser = async () => {
    const res = await axios.post('/api/users', { name: newUser });
    setUsers([...users, res.data]);
    setNewUser('');
  };

  // UPDATE
  const updateUser = async (id) => {
    const res = await axios.put(`/api/users/${id}`, { name: 'Updated Name' });
    setUsers(users.map(user => (user.id === id ? res.data : user)));
  };

  // DELETE
  const deleteUser = async (id) => {
    await axios.delete(`/api/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2>CRUD Example</h2>

      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addUser}>Add</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name}
            <button onClick={() => updateUser(u.id)}>Edit</button>
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudExample;

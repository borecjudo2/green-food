import React, {useState, useEffect} from 'react';
import './App.css';
import API from "./utils/API";


const Users = () => {

  const [users, setUsers] = useState([])

  const getUsers = () => {
    API.get('/api').then(res => {
      console.log(res);
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return users.map((user, index) => {
    return (
      <div key={index}>
        <h1>{user.name}</h1>
        <p>{user.id}</p>
      </div>
    )
  })
};

function App() {
  return (
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;

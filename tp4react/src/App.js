import './App.css';
import { Employes } from './Components/PageServices/employes';
import { Users } from './Components/PageServices/users';
import { Home } from './Components/home'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { EmployeHome } from './Components/PageServices/EmployeeService/employeeHome';
import { MainHeader } from './Components/Headers/mainHeader';
import { UserHome } from './Components/PageServices/UserService/userHome';
import { NewUser } from './Components/PageServices/UserService/newUser';
import { useNavigate } from 'react-router-dom';
import { Emprunt } from './Components/PageServices/UserService/emprunt';

function App() {
  const [employees, setEmployes] = useState([]);
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();
  const getDocuments = async (recherche,typeRecherche) => {
    
  }
  const submitNewUser = async (client) => {
    let request = await fetch("http://localhost:8080/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(client)
    })
    if (request.ok) {
      navigate("/users")
      getUsers();
    } else {
      const errorJson = await request.json()
      const errors = errorJson.errors;
      console.log(errors)
    }
  }

  const getUser = (clientNumber) =>{
    let user;
    users.map((client) => {
      if (client.clientNumber == clientNumber)
        user = client;
    })
    return user;
  }

  const fetchEmployees = async () => {
    let request = await fetch("http://localhost:8080/employees")
    let data = await request.json();
    return data;
  }
  const fetchUsers = async () => {
    let request = await fetch("http://localhost:8080/users")
    let data = await request.json();
    return data;
  }

  const getEmployees = async () => {
    const emp = await fetchEmployees();
    setEmployes(emp);
  }
  const getUsers = async () => {
    const users = await fetchUsers()
    setUsers(users);
  }
  useEffect(() => {
    getEmployees();
    getUsers();
  }, [])

  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="users" element={<Users users={users} />}></Route>
        <Route path="users/:id" element={<UserHome getUser={getUser} />}></Route>
        <Route path="users/:id/emprunter" element={<Emprunt getUser={getUser} getDocuments={getDocuments}/>}></Route>
        <Route path="employes" element={<Employes employes={employees} />}></Route>
        <Route path="employes/:id" element={<EmployeHome employes={employees} />}></Route>
        <Route path="newUser" element={<NewUser submit={submitNewUser} />}></Route>
      </Routes>
    </>
  );
}


export default App;


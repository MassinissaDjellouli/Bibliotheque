import './App.css';
import { Employes } from './Components/PageServices/employes';
import { Users } from './Components/PageServices/users';
import { Home } from './Components/home'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { EmployeHome } from './Components/PageServices/EmployeeService/employeeHome';
import { MainHeader } from './Components/Headers/mainHeader';
import { UserHome } from './Components/PageServices/UserService/userHome';
import { NewUser } from './Components/PageServices/UserService/NewUser/newUser';
import { useNavigate } from 'react-router-dom';
import { Emprunt } from './Components/PageServices/UserService/Emprunts/emprunt';
import { Retour } from './Components/PageServices/UserService/Retours/retours';
import { NewLivre } from './Components/PageServices/EmployeeService/newLivre/newLivre';
import { NewMedia } from './Components/PageServices/EmployeeService/newMedia/newMedia';

function App() {
  const [employees, setEmployes] = useState([]);
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

  const getEmployees = async () => {
    const emp = await getRequest("/employees");
    setEmployes(emp);
  }
  const getUsers = async () => {
    const users = await getRequest("/users")
    setUsers(users);
  }

  const getUser = (clientNumber) => {
    let user;
    users.map((currentUser) => {
      if (currentUser.clientNumber == clientNumber)
        user = currentUser;
    })
    return user;
  }

  const getEmploye = (employeId) => {
    let employee
    employees.map((currentEmp) => {
      if (currentEmp.id == employeId) {
        employee = currentEmp;
      }
    })
    return employee
  }

  useEffect(() => {
    getEmployees();
    getUsers();
  }, [])

  const submitNewUser = async (client) => {
    postRequest("/newUser", client, "/users")
  }
  const submitNewLivre = async (livre) => {
    postRequest("/newLivre", livre, "/employes")
  }
  const submitNewMedia = async (media) => {
    postRequest("/newMedia", media, "/employes")
  }

  const getRequest = async (path) => {
    let request = await fetch("http://localhost:8080" + path)
    let data = await request.json();
    return data;
  }

  const postRequest = async (path, body, returnPath) => {
    let request = await fetch("http://localhost:8080" + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    if (request.ok) {
      navigate(returnPath)
    } else {
      const errorJson = await request.json()
      const errors = errorJson.errors;
      console.log(errors)
    }
  }
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="" element={<Home />}></Route>

        <Route path="users" element={<Users users={users} />}></Route>
        <Route path="users/:id" element={<UserHome getUser={getUser} getRequest={getRequest} />}></Route>
        <Route path="users/:id/emprunter" element={<Emprunt getUser={getUser} getRequest={getRequest} />}></Route>
        <Route path="users/:id/retourner" element={<Retour getUser={getUser} getRequest={getRequest} />}></Route>

        <Route path="employes" element={<Employes employes={employees} />}></Route>
        <Route path="employes/:id" element={<EmployeHome getEmploye={getEmploye} />}></Route>

        <Route path="employes/newLivre" element={<NewLivre submit={submitNewLivre} />}></Route>
        <Route path="employes/newMedia" element={<NewMedia submit={submitNewMedia} />}></Route>

        <Route path="newUser" element={<NewUser submit={submitNewUser} />}></Route>
      </Routes>
    </>
  );
}

export default App;
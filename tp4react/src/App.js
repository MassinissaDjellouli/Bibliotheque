import './App.css';
import { Employes } from './Components/PageServices/employes';
import { Users } from './Components/PageServices/users';
import { Home } from './Components/home'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <h1 class="bg-dark text-light text-center py-4 m-0">Bibliothèque de JavaTown</h1>
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="users" element={<Users />}></Route>
      <Route path="employes" element={<Employes />}></Route>
    </Routes>


    </>
  );
}

export default App;


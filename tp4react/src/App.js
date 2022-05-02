import './App.css';
import { Employes } from './Components/PageServices/employes';
import { Users } from './Components/PageServices/users';
import { Link, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <h1 class="bg-dark text-light text-center py-4">Bibliothèque de JavaTown</h1>
    <Routes>
      <Route path="users" element={<Users />}></Route>
      <Route path="employes" element={<Employes />}></Route>
    </Routes>
      <Link to="/users">Portail utilisateur</Link>
      <Link to="/employes">Portail employé</Link>

    </>
  );
}

export default App;


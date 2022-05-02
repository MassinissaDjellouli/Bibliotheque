import './App.css';
import { Employes } from './Components/PageServices/employes';
import { Users } from './Components/PageServices/users';
function App() {
  return (
    <>
      <h1 class="bg-dark text-light text-center py-4">Bibliothèque de JavaTown</h1>
      <Users />
      <Employes />
    </>
  );
}

export default App;


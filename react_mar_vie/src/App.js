import logo from "./logo.svg";
import "./App.css";
import Saludo from "./components/Saludo";

// Elemento JSX
const titulo = <h1>Yo soy el título</h1>;
// describe lo que queremos mostrar por pantalla

// Componente
// Es la combinacion de varios elementos

const App = () => {
  const nombre = 'Daniel'
  const apellido = 'Montilla'
  const email = 'daniel@gmil.com'
  // const idUsuario = 'asfdsefnsij13247iohdf9wr9q'

  return (
    <div>
      {titulo}
      <Saludo nombre={nombre} apellido={apellido} email={email}/>
      {/* <ListaDeProductos idUsuario={idUsuario} /> */}
    </div>
  );
}

export default App;

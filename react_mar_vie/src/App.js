import React, {useState} from 'react'
import logo from "./logo.svg";
import "./App.css";
import Saludo from "./components/Saludo";
import Contador from "./components/Contador";
import Tabs from "./components/Tabs";

// Elemento JSX
const titulo = <h1>Yo soy el título</h1>;
// describe lo que queremos mostrar por pantalla

// Componente
// Es la combinacion de varios elementos

const App = () => {
  const [nombre, setNombre] = useState('Daniel')

  const apellido = 'Montilla'
  const email = 'daniel@gmil.com'
  // const idUsuario = 'asfdsefnsij13247iohdf9wr9q'

  return (
    <div>
      {/* {titulo}
      <Saludo nombre={nombre} setNombre={setNombre} apellido={apellido} email={email}/> */}
      {/* <ListaDeProductos idUsuario={idUsuario} /> */}
      {/* <Contador /> */}
      <Tabs />
    </div>
  );
}

export default App;
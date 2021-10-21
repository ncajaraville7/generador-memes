import { useState } from 'react';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (e) {
    setLinea1(e.target.value);
  }

  const onChangeLinea2 = function (e) {
    setLinea2(e.target.value);
  }

  const onChangeImagen = function (e) {
    setImagen(e.target.value);
  }

  return (
    <div className="App">
      <h1>Generador de Memes</h1>

      <div className="campos">
        <select onChange={onChangeImagen}>
          <option value="Fire">Casa en llamas</option>
          <option value="Futurama">Futurama</option>
          <option value="History">History Channel</option>
          <option value="Matrix">Matrix</option>
          <option value="Philosoraptor">Philosoraptor</option>
          <option value="Smart">Smart Guy</option>
        </select>
        <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"></input>
        <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"></input>
        <button>Exportar</button>
      </div>

      <div className="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"images/" + imagen + ".jpg"} />
      </div>
    </div>
  );
}

export default App;

import html2canvas from 'html2canvas';
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

  const onClickExportar = function (e) {
    html2canvas(document.querySelector('#meme')).then(canvas => {
      const img = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
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
        <button onClick={onClickExportar}>Exportar</button>
      </div>

      <div className="meme" id="meme">
        <div className="meme__texto">
          <span>{linea1}</span>
          <span>{linea2}</span>
        </div>
        <img src={"images/" + imagen + ".jpg"} alt="meme" />
      </div>
    </div>
  );
}

export default App;

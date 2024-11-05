import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';
import hexToRgba from 'hex-to-rgba';
import './App.css';

function App() {

  const [times, setTimes] = useState([
    { id: uuidv4(), nome: 'Ação ⚔️', cor: '#57C278' },
    { id: uuidv4(), nome: 'Aventura 🏞️', cor: '#82CFFA' },
    { id: uuidv4(), nome: 'Comédia 😂', cor: '#A6D157' },
    { id: uuidv4(), nome: 'Drama 😢', cor: '#E06B69' },
    { id: uuidv4(), nome: 'Fantasia 🧙‍♂️', cor: '#DB6EBF' },
    { id: uuidv4(), nome: 'Slice of Life 🍰', cor: '#FFBA05' },
    { id: uuidv4(), nome: 'Terror 👻', cor: '#FF8A29' },
    { id: uuidv4(), nome: 'Sci-Fi 🚀', cor: '#6A5ACD' },
    { id: uuidv4(), nome: 'Mecha 🤖', cor: '#4682B4' },
    { id: uuidv4(), nome: 'Romance 💕', cor: '#FF69B4' },
    { id: uuidv4(), nome: 'Esportes ⚽', cor: '#32CD32' },
    { id: uuidv4(), nome: 'Mistério 🕵️‍♂️', cor: '#8B0000' },
    { id: uuidv4(), nome: 'Psicológico 🧠', cor: '#4169E1' },
    { id: uuidv4(), nome: 'Sobrenatural 👽', cor: '#9370DB' },
    { id: uuidv4(), nome: 'Thriller 🔪', cor: '#2F4F4F' }
]);

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudaCor(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        return { ...time, cor };
      }
      return time;
    }));
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const colaboradorComId = { ...colaborador, id: uuidv4() };
    setColaboradores(prevColaboradores => {
      const updatedColaboradores = [...prevColaboradores, colaboradorComId];
      console.log(updatedColaboradores);
      return updatedColaboradores;
    });
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
      />

      {times.map(time => (
        <Time
          key={time.id}
          id={time.id}
          nome={time.nome}
          corPrimaria={time.cor}
          corSecundaria={hexToRgba(time.cor, 0.5)}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          mudaCor={mudaCor}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
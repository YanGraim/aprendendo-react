import { useState } from 'react';
import Nome from './components/Nome';

function App() {
  const [aluno, setAluno] = useState('Yan Graim')
  function handleChangeName(nome) {
    setAluno(nome);
  }

  return (
    <div>
      <h1>Bem vindo ao meu projeto</h1> <br/>
      <h2>Olá: {aluno}</h2>
      <button onClick={ () => handleChangeName('Wanessa Niederauer')}>
        Mudar nome
      </button>
    </div>
  );
}

export default App;
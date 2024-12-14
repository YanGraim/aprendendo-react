import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React JS'
  ]);


  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastrando usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome:</label><br/>
        <input 
          placeholder="Digite uma tarefa" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}/>
        <br/>
        <button type='submit'>
          Registar
        </button>
      </form>

      <br/> <br/>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li> // o react sempre pede para passar uma key quando se utiliza uma lista
        ))}
      </ul>
    </div>
  );
}

export default App;
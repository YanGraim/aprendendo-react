import Nome from './components/Nome';

function App() {
  return (
    <div>
      <h1>Bem vindo ao meu projeto</h1>
      <Nome aluno = "Yan Graim" idade = {27}/>
      <br/>
      <br/> 
      <Nome aluno = "Wanessa Niederauer" idade = {23}/>
    </div>
  );
}

export default App;
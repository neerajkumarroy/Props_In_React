import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
    <h1>Hello My React Page</h1>
    <Student name={"neeraj"} email ="neeraj@test.com" other= {{address:"Dehradun",mobile:"1122"}} />
    <Student name={"yougesh"} email ="yougesh@test.com" other= {{address:"Delhi",mobile:"112233"}}/>
    <Student name={"Ramandeep"} email ="ramandeep@test.com" other= {{address:"Haridwar",mobile:"112244"}} />
    
    </div>
  );
}

export default App;

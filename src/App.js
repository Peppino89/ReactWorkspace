import Miocomponente from "./components/Miocomponente"; // puoi omettere .js
import Persona from "./components/ExamplesOfHowComponentsCommunicate/Persona";
import Padre from "./components/ExamplesOfHowComponentsCommunicate/Padre";
//import './App.css';

function App() {
  return (
      <div className="App">
        <Miocomponente>
          <Persona nome="Giuseppe" cognome="Giordano" anni={34}/>
        </Miocomponente>
          <Padre/>
      </div>
  );
}

export default App;


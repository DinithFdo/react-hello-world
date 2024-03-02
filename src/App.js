import './App.css';

import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is a child element</p>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Greet name="Clark" heroName="Superman"/>
      <Welcome name="Dinith"/>
      <Welcome name="Ian"/>
      
      {/* <Welcome/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;

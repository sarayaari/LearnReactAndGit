import logo from './logo.svg';
import './App.css';
import AppApi from "./comps/appApi";
 import {useEffecct} from 'react'
function App() {

// useEffecct(()=>{

// },[])

  return (
    <div className="App">
      <AppApi>  </AppApi>
    </div>
  );
}

export default App;

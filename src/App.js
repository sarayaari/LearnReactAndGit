import logo from './logo.svg';
import './App.css';
import TestGraph from './comps/testGraph';
import DynamicLineChart from './comps/grap';


function App() {
  return (
    <div className="App container col-md-5">
     {/* <TestGraph></TestGraph> */}
     <DynamicLineChart></DynamicLineChart>
    </div>
  );
}

export default App;

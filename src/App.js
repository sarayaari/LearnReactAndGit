import logo from './logo.svg';
import './App.css';
import AppTous from './comps/appTous';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="bottom-right"
      />
      <AppTous></AppTous>
    </div>
  );
}

export default App;

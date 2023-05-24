
import React from 'react';
import './App.css';
 import { BrowserRouter } from 'react-router-dom';
import AppWeather from "./components/appWeather";
function App() {
  return (
    <BrowserRouter>
      <AppWeather></AppWeather>
    </BrowserRouter>
  );
}

export default App;






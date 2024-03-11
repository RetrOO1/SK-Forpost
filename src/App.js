import React from "react";
import "./styles/App.css";
import Header from "./components/UI/Header";
// import SliderCarusel from './components/SliderCarusel';
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Cuerpo from './Componentes/Cuerpo';
import Header from './Componentes/Header';
import Pie from './Componentes/Pie';
import { ReactDOM } from "react";
import Inicio from './Pagina/Inicio';
import Cards from './Pagina/Cards';
import Informacion from './Pagina/Informacion';
import Pokebola from './Pagina/Pokebola';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >

        <
        BrowserRouter >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/inicio"
        element = { < Inicio / > }
        />  <
        Route path = "/"
        element = { < Cuerpo / > }
        />  <
        Route path = '/informacion'
        element = { < Informacion / > }
        />   <
        Route path = '/cards'
        element = { < Cards / > }
        />   <
        Route path = '/pokebola'
        element = { < Pokebola / > }
        /> <
        Route path = "/"
        element = { < Pie / > }
        />    <
        /Routes >   <
        /BrowserRouter>  


        <
        /header>

        <
        /div>
    );
}
export default App;
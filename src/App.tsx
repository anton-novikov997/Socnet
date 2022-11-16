import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {NavBar} from "./components/NavBar";
import {Contens} from "./components/Contens";

function App() {
    return (
        <div className="wrapper">

                <Header/>
                <NavBar/>
                <Contens/>

        </div>
    );
}

export default App;

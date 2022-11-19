import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Link, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {NavBar} from "./components/NavBar/NavBar";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";


function App() {

    return (
        <div className="wrapper">
            <Header></Header>
            <NavBar></NavBar>
            {/*<Link to={"/Profile"}></Link>*/}
            {/*<Link to={"/Dialogs"}></Link>*/}
            {/*<Link to={"/News"}></Link>*/}
            {/*<Link to={"/Music"}></Link>*/}
            {/*<Link to={"/Music"}></Link>*/}
        <div className={"app-wrapper-content"}>
            <Routes>
                <Route path="/Profile" element={<Profile />}></Route>
                <Route path="/Dialogs" element={<Dialogs/>}></Route>
                <Route path="/News" element={<News/>}></Route>
                <Route path="/Music" element={<Music/>}></Route>
                <Route path="/Settings" element={<Settings/>}></Route>
            </Routes>
        </div>
        </div>
    );
}

export default App;

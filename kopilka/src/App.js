import './App.css';
import Header from "./components/Header/Header";
import {useState} from "react";
import Content from "./components/Content/Content";

function App() {


    return (
        <div className="App">
            <Header/>
            <Content/>
        </div>
    );
}

export default App;

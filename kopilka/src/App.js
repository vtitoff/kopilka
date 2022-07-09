import './App.css';
import Header from "./components/Header/Header";
import {useState} from "react";
import Content from "./components/Content/Content";
import RegistrationForm from "./components/Registration/RegistrationForm";
const axios = require('axios')

function App() {

    const [logged, Setlogged] = useState(false)
    const [itemsData, SetItemsData] = useState([])

    function auth() {
        Setlogged(true)
    }

    function updateItemData() {
        SetItemsData(...itemsData)
    }

    return (
        <div className="App">
            <Header/>
            <Content logged={logged}/>
            <RegistrationForm logged={logged} auth={auth}/>
        </div>
    );
}

export default App;

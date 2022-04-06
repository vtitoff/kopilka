import './App.css';
import Header from "./components/Header/Header";
import {useState} from "react";
import Content from "./components/Content/Content";
import RegistrationForm from "./components/Registration/RegistrationForm";

function App() {

    const [logged, Setlogged] = useState(false)

    return (
        <div className="App">
            <Header/>
            {/*<Content logged={logged}/>*/}
            <RegistrationForm/>
        </div>
    );
}

export default App;

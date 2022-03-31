import logo from './logo.svg';
import './App.css';
import AuthForm from "./components/AuthForm/AuthForm";

function App() {
    return (
        <div className="App">
            <header>
                <div className="container">
                    <img className="header__logo"></img>
                    <AuthForm/>
                </div>
            </header>
        </div>
    );
}

export default App;

import './App.css';
import AuthForm from "./components/AuthForm/AuthForm";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";

function App() {

    let data = [
        {
            "name": "test name 1",
            "full_sum": 50000,
            "current_sum": 10000
        },
        {
            "name": "test name 2",
            "full_sum": 70000,
            "current_sum": 20000
        },
        {
            "name": "test name 3",
            "full_sum": 100000,
            "current_sum": 100
        }
    ]



    return (
        <div className="App">
            <Header/>
            <div className="content">
                <div className="container">
                    {data.map((i)=>{
                        <Item name={i["name"]} full_sum={i["full_sum"]} current_sum={i["current_sum"]}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;

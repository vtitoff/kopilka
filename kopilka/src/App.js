import './App.css';
import AuthForm from "./components/AuthForm/AuthForm";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";

function App() {

    let data = [
        {
            "name": "test name 1",
            "full_sum": 50000,
            "current_sum": 10000,
            "user_key": "",
            "item_id": "",
            "description": ""
        },
        {
            "name": "test name 1",
            "full_sum": 50000,
            "current_sum": 10000,
            "user_key": "",
            "item_id": "",
            "description": ""
        },
        {
            "name": "test name 1",
            "full_sum": 50000,
            "current_sum": 10000,
            "user_key": "",
            "item_id": "",
            "description": ""
        }
    ]


    return (
        <div className="App">
            <Header/>
            <div className="content">
                <button className="add-item__btn">
                    Добавить цель
                </button>
                <div className="container">
                    {data.map((i) => {
                        return <Item name={i["name"]} full_sum={i["full_sum"]} current_sum={i["current_sum"]}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;

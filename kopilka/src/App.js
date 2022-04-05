import './App.css';
import AuthForm from "./components/AuthForm/AuthForm";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import ModalItemCreateItem from "./components/ModalItem/ModalItemCreateItem";
import {useState} from "react";

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
            "name": "test name 2",
            "full_sum": 70000,
            "current_sum": 9000,
            "user_key": "",
            "item_id": "",
            "description": ""
        },
        {
            "name": "test name 3",
            "full_sum": 150000,
            "current_sum": 100,
            "user_key": "",
            "item_id": "",
            "description": ""
        }
    ]

    const [modalCreateActive, setModalCreateActive] = useState(false)
    const [modalEditActive, setModalEditActive] = useState(false)

    function modalCreate() {
        setModalCreateActive(!modalCreateActive)
    }

    function modalEdit(){
        setModalEditActive(!modalEditActive)
    }

    return (
        <div className="App">
            <Header/>
            <div className="content">
                <button className="add-item__btn" onClick={modalCreate}>
                    Добавить цель
                </button>
                <div className="container">
                    {data.map((i) => {
                        return <Item name={i["name"]} full_sum={i["full_sum"]} current_sum={i["current_sum"]}
                                     modal_edit={modalEdit} active={modalEditActive}/>
                    })}
                </div>
            </div>
            <ModalItemCreateItem active={modalCreateActive} setActive={modalCreate}/>
        </div>
    );
}

export default App;

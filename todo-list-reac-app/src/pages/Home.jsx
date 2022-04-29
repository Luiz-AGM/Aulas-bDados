import { TodoListItem } from '../components/TodoListItem'
import { useState } from 'react';
import './Home.css'

export function Home() {
    const [itemsArray, setItemsArray] = useState([
        
            { id: 1, text: "Acordar 7 horas da manhã", checked: false},
            { id: 2, text: "Lavar toda a louça suja que está dentro ou fora da pia", checked: false},
            { id: 3, text: "Levar os cachorros para passear por 30 min", checked: false},
            { id: 4, text: "Lavar o carro todo", checked: true},
    ]
        
        // let array =[
        //     { id: 1, text: "Acordar 7 horas da manhã", checked: false},
        //     { id: 2, text: "Lavar toda a louça suja que está dentro ou fora da pia", checked: false},
        //     { id: 3, text: "Levar os cachorros para passear por 30 min", checked: false},
        //     { id: 4, text: "Lavar o carro todo", checked: true},
        // ];

        // console.log(localStorage.getItem("itemsArray"));
        // const storedArray = localStorage.getItem("itemsArray");

        // if (storedArray != null) {
        //     array = JSON.parse(storedArray);
        // }
        // else {
        //     const itemsArrayString = JSON.stringify(array);
        //     localStorage.setItem("itemsArray",itemsArrayString);
        // }
        // return array;
    );

    function alteraChecked (id, checked){
        const buscaIndex = itemsArray.findIndex(item=>{
            return item.id == id;
        })
        itemsArray[buscaIndex].checked = checked;
        console.log(itemsArray);
    }

    return (
        <div className="container">
            {itemsArray.map(({id, text, checked}) => {
                {/* return <TodoListItem {...obj} /> */}
                return <TodoListItem id={id} text={text} key={id} checked={checked} alteraChecked = {alteraChecked}/>
            })}
        </div>
    )
}
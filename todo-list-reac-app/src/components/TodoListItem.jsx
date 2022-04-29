import { useState } from "react";

export function TodoListItem({ id, text, checked, alteraChecked }) {
    const [checkedState, setCheckedState] = useState(checked);

    function changeCheckboxValue() {
        setCheckedState(!checkedState);
        alteraChecked(id, !checkedState)
    }

    return (
        <>
            <input id={`check-${id}`} type="checkbox" onChange={changeCheckboxValue} checked={checkedState}/>
            <label htmlFor={`check-${id}`}>{ text }</label><br/>
        </>
    )
}
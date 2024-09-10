import Input from "./Input"
import { useRef } from "react";

export default function NewProject({onAdd}){
    const title= useRef();
    const description= useRef();
    const dueDate= useRef();

    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDueDate=dueDate.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }


    return <div className="new-project">
        <menu className="new-project-buttons-container">
            <button className="new-project-button-cancel" >Cancel</button>
            <button className={"new-project-button-save"} onClick={handleSave}>Save</button>
        </menu>
        <div>
            <Input ref={title} label='Title'/>
            <Input ref={description} label="Description" textarea/>
            <Input type='date' ref={dueDate} label="Due Date"/>
        </div>
    </div>
}
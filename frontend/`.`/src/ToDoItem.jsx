import Trash from "./assets/Trash.jsx";

const ToDoItem = () => {
    return (
       
        <div className="tasks">
            <input className="check" type="checkbox" />
            <div className="integer-urna"> todo title </div>
            <button className="trash">
                <Trash />
            </button>
        </div>
    
    );
};

export default ToDoItem;
import Plus from "./assets/Plus.jsx";

const ToDoForm = () => {
    return (
        <div className="todo">
            <form className="new-task">
                    <input
                        type="text"
                        className="input"
                        placeholder="toodoo"
                    />
                <button className="button"><Plus /></button>
            </form>
        </div>
    );
};

export default ToDoForm;
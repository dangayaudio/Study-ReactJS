const TodoNew = (props) => {
    const { addNewTodo } = props;
    // addNewTodo(170601);

    const handleClick = () => {
        alert("click");
    }
    const handleChange = (name) => {
        console.log("test", name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleChange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Điểm danh </button>
        </div>
    )
}

export default TodoNew
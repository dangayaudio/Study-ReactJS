const TodoData = (props) => {
    console.log("check props: ", props);
    //const { code } = props;
    return (
        <div className='todo-data'>
            <div>Learning React {props.code}</div>
        </div>
    )
}

export default TodoData
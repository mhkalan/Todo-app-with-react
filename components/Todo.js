import {useState} from "react";
import TodoForm from "./TodoForm";
import {RiCloseCircleLine} from "react-icons/ri";
import {TiEdit} from "react-icons/ti";

function Todo({todos, completeTodo, removeTodo, updateTodo, completed}){
    const [edit, setEdit] = useState({
        id:null,
        value:''
    })
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value: ''
        })
    }
    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }
    const isFalse = todos.complete
    return todos.map((todo, index) =>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
                />
                <TiEdit
                onClick={() => setEdit({id:todo.id,
                    value: todo.text}
                )}
                className='edit-icon'
                />
                <div>
                    {isFalse? (
                            < input type='checkbox' checked />
                    ):(
                        < input type='checkbox' onClick={()=>completed(todo.id)}/>
                    )}
                </div>
            </div>
        </div>
    ))
}
export default Todo

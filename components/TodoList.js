import {useEffect, useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
const Local = 'lists'

function TodoList(){
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        const storage = JSON.parse(localStorage.getItem(Local))
        if (storage){
            setTodos(storage)
        }
    },[])
    useEffect(() =>{
        localStorage.setItem(Local, JSON.stringify(todos))
    }, [todos])
    const AddTodo = (todo) => {
        setTodos([todo, ...todos])
    }
    const completeTodo = id => {
        let updatedTodo = todos.map(todo =>{
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodo)
    }
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }
    const completed = id => {
        const newArr = todos.map((el, index)=>{
            if (el.id === id){
                return {...el, complete:!el.complete}
            }
            else return
        })
        setTodos(newArr)
    }
    const updateTodo = (todoId, newValue) => {
        setTodos(prev=>prev.map(item=>(item.id === todoId ? newValue : item)))
    }
    return (
        <div>
            <TodoForm onSubmit = {AddTodo}/>
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            completed={completed}
            />
        </div>
    );
}
export default TodoList

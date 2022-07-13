import {useState, useRef} from "react";

function TodoForm(props){
    const [input, setInput] = useState( '')
    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSubmit = e => {
      e.preventDefault();
      props.onSubmit({
          id : Math.floor(Math.random() * 10000),
          text : input,
            complete:false
      });
    }
    const inputRef = useRef(null)

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text'
                   placeholder='Add a todo'
                   value={input} name='text'
                   className='todo-input'
                   onChange={handleChange}
                   ref={inputRef}
            />
            <button className='todo-button'>
                Add
            </button>
        </form>
    );
}

export default TodoForm



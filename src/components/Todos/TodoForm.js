import { useState } from 'react'
import styles from './TodoForm.module.css';
import {v4 as uuidv4} from "uuid";
import {addTodoRed} from "../../redux/actions";
import {useDispatch} from "react-redux";

function TodoForm({ lang }) {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  function addTodo(text) {
    let id = uuidv4();
    text && dispatch(addTodoRed(text, id));
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder={{en: "Enter new todo", ru: "Введите новую задачу"}[lang]}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">{{en: 'Submit', ru: 'Добавить'}[lang]}</button>
      </form>
    </div>
  )
}

export default TodoForm

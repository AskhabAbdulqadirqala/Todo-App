import { useState } from 'react'
import styles from './TodoForm.module.css';
 
function TodoForm({ addTodo, lang }) {
  const [text, setText] = useState('')
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

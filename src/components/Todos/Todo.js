import { RiCheckboxBlankCircleLine, RiCloseCircleLine } from 'react-icons/ri'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { HiPencil, HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { ImCross } from "react-icons/im";

import { useState } from 'react'

import styles from './Todo.module.css'
import promptStyles from '../universalStyles/promptText.module.css'


function Todo({ todo, todos, setTodos, deleteTodo, lang}) {

  const {text, id, isEditing, createdDate, lastEditDate, isDataButtonActive, activity} = todo;

  const [editText, setEditText] = useState(text)

  function changeTodosParameter(parameter){
    setTodos(todos.map(
        (item) => {
          let {...rest} = item;
          let values = {activity: !item.activity, isEditing: !item.isEditing, isDataButtonActive: !item.isDataButtonActive, onSubmitEditInput: {text: editText, isEditing: false, lastEditDate: new Date().toJSON()}};
          let newValue = values[parameter];
          if (parameter==='onSubmitEditInput'){
            return item.id===id ? {...rest, ...newValue} : item
          }
          return item.id===id ? {...rest, [parameter]: newValue} : item
        }
      )
    )
  }
  return (
    <div className={activity ? styles.todoActive : styles.todoNotActive}>
      <span className={promptStyles.tooltip}>
        <HiPencil 
          className={styles.editIcon} 
          onClick={() => changeTodosParameter('isEditing')}
        />

        <form onSubmit={(e) => {e.preventDefault(); changeTodosParameter('onSubmitEditInput'); if(editText==='') deleteTodo(id)}} 
              className={isEditing ? styles.inputEditForm : styles.inputEditFormUnactive}>
          <input type='text'
                 className={styles.inputEdit}
                 placeholder={{en:"Edit your todo", ru: 'Отредактируйте задачу'}[lang]}
                 value={editText}
                 onChange={(e) => setEditText(e.target.value)}
          />
          <button type="submit" hidden />
        </form>
        <span className={promptStyles.tooltiptext}>{{en:'Edit',ru:'Изменить'}[lang]}</span>
      </span>

      <div className={styles.todoText}>
        <p className={!isEditing ? styles.todoTextP : styles.todoTextDisplayNone} id='todoText'>{text}</p>

        <p className={styles.buttons}>
          <span 
            className={promptStyles.tooltip} 
            onClick={()=>deleteTodo(id)}>
              <RiCloseCircleLine className={styles.deleteIcon}/>
              <span className={promptStyles.tooltiptext}>{{en:'Remove',ru:'Удалить'}[lang]}</span>
          </span>

          <span 
            onClick={() => changeTodosParameter('activity')}
            className={promptStyles.tooltip}
            >
            {activity ? <RiCheckboxBlankCircleLine className={styles.activeTodo}/> 
                      : <IoCheckmarkCircleOutline className={styles.activeTodo}/>
            }
            <span className={promptStyles.tooltiptext}>{activity ? {en:'Complete', ru:'Завершить'}[lang] : {en:'Reactivate',ru:'Активировать'}[lang]}</span>
          </span>

          <span 
            className={promptStyles.tooltip} 
            >
              <HiOutlineDotsCircleHorizontal 
                className={styles.dataBtn}
                onClick={() => {changeTodosParameter('isDataButtonActive')}}/>
              <span className={promptStyles.tooltiptext}>{{en:'Data',ru:'Данные'}[lang]}</span>
              <span className={isDataButtonActive ? styles.dataText : styles.hiddenDataText}>
                <ImCross className={styles.cross} 
                         onClick={()=>changeTodosParameter('isDataButtonActive')}/><br/>
                              {{en:'Date of creation',ru:'Дата создания'}[lang]}: {new Date(createdDate).toLocaleString()}
                              {!!lastEditDate && <hr/>}
                              {!!lastEditDate && {en:'Date of last edit: ',ru:'Дата последнего изменения: '}[lang]}
                              {!!lastEditDate && new Date(lastEditDate).toLocaleString()}
              </span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Todo

import { v4 as uuidv4 } from 'uuid'
import { useState, React } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom' 
import queryString from 'query-string'

import SwitchPanel from './Todos/SwitchPanel.js'
import TodoForm from './Todos/TodoForm.js'
import TodoList from './Todos/TodoList.js'
import Buttons from './UI/Buttons.js'

import styles from './TodoApp.module.css'

function TodoApp ({lang, setLang, userIsAuth, setAuth}) {
  const [todos, setTodos] = useState([]);
  const [activeList, setActiveList] = useState(1);
  const [searchRequest, setSearchRequest] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = queryString.parse(location.search)
  function addTodo(text) {
    text && 
      setTodos([...todos, {id: uuidv4(), text: text, activity: true, isEditing: false, 
                          createdDate: new Date().toJSON(),
                          lastEditDate: false,
                          isDataButtonActive: false,
                          }]);
  };

  function deteleUnactive() {
    setTodos(todos.filter((item) => item.activity === true))
  }

  function deleteTodo(id) {
    setTodos(todos.filter((item) => item.id !== id))
  };
  function navigateTo(key, newLoc){
    setSearchParams({...query, [key]: newLoc})
  }
  let countUnactive = todos.reduce(function(counter, item) {
      return item.activity ? counter : ++counter
    }, 0);

	return (
    <div>
      {!userIsAuth && <div className={styles.noAuthLabel}><p>{{en:'If you want the entered tasks to be saved after page refresh, you need to ',
                                               ru:'Если вы хотите, чтобы введённые задачи сохранились после обновления страницы, вам нужно '}[lang]}
                                               <Link to='registration'>{{en:'registarate',ru:'зарегистрироваться'}[lang]}</Link> 
                                               {{en:' or ',ru:' или '}[lang]}<Link to='signin'>{{en:'sign in',ru:'войти в аккаунт'}[lang]}</Link></p></div>}
	   
     <div className={styles.todoApp}> 
        <p style={{marginTop: '8px'}}>{!userIsAuth ? <><span className={styles.auth}> <Link to='/registration' style={{borderRight: '2px solid #555'}}>{{en:'Registration ',ru:'Регистрация '}[lang]}</Link> <Link style={{paddingLeft:'3px'}} to='signin'>{{en: 'Sign in', ru: ' Войти'}[lang]}</Link></span></> : <span className={styles.auth} onClick={()=>setAuth(false)}>Sign out</span> }
          <span className={styles.langButtons}>
            <span className={styles.langButton1} title={{en:'English',ru:'Английский'}[lang]} onClick={()=>setLang('en')}>EN</span>
            <span className={styles.langButton2} title={{en:'Russian',ru:'Русский'}[lang]} onClick={()=>setLang('ru')}>RU</span>
          </span>
        </p>
        <h1 className={styles.title}>Todo App</h1>
        <SwitchPanel activeList={activeList} setActiveList={setActiveList} lang={lang}/>

        <TodoForm addTodo={addTodo} lang={lang}/>

        <Buttons todos={todos} setTodos={setTodos} 
                 deteleUnactive={deteleUnactive} countUnactive={countUnactive}
                 setSearchRequest={setSearchRequest} searchRequest={searchRequest}
                 navigateTo={navigateTo} searchSortItem={query.sort}
                 lang={lang}
                 />

        <TodoList todos={todos} setTodos={setTodos} lang={lang}
                  deteleUnactive={deteleUnactive} deleteTodo={deleteTodo}
                  activeList={activeList} searchRequest={searchRequest} searchSortItem={query.sort}/>

        {
         (countUnactive > 0) &&
            !searchRequest && <h2>{{en:'You have completed', ru:'Завершено задач -'}[lang]} {countUnactive} 
            {(countUnactive>1) ? {en:' todos',ru:''}[lang] : {en:'todo',ru:''}[lang]}</h2>
        }
     </div>
    </div>
	)
}

export default TodoApp;
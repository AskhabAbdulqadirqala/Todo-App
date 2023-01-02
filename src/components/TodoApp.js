import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import queryString from 'query-string'

import SwitchPanel from './Todos/SwitchPanel.js'
import TodoForm from './Todos/TodoForm.js'
import TodoList from './Todos/TodoList.js'
import Buttons from './UI/Buttons.js'

import styles from './TodoApp.module.css'
import {deleteLogin, removeState} from "../redux/actions";

function TodoApp ({lang, setLang, userIsAuth, setAuth}) {
  const [activeList, setActiveList] = useState(1);
  const [searchRequest, setSearchRequest] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const query = queryString.parse(location.search)

  const todos = useSelector(state => {
        const { todoAppReducer } = state;
        return todoAppReducer.todos;
  });

  function signout() {
      dispatch(removeState())
      dispatch(deleteLogin())
      setAuth(false)
  }

  let countUnactive = todos.reduce(function(counter, item) {
      return item.activity ? counter : ++counter
    }, 0);
	return (
    <div>
      {!userIsAuth &&
          <div className={styles.noAuthLabel}>
              <p>{{en:'If you want the entered tasks to be saved after page refresh, you need to ',
                   ru:'Если вы хотите, чтобы введённые задачи сохранились после обновления страницы, вам нужно '}[lang]}
                  <Link to='registration'>{{en:'registarate',ru:'зарегистрироваться'}[lang]}</Link>
                  {{en:' or ',ru:' или '}[lang]}
                  <Link to='signin'>{{en:'sign in',ru:'войти в аккаунт'}[lang]}</Link>
              </p>
          </div>
      }
	   
     <div className={styles.todoApp}> 
        <p style={{marginTop: '8px'}}>
            {!userIsAuth ? <>
                <span className={styles.auth}>
                    <Link to='/registration' style={{borderRight: '2px solid #555'}}>
                         {{en:'Registration ',ru:'Регистрация '}[lang]}</Link>
                    <Link style={{paddingLeft:'3px'}} to='signin'>
                        {{en: 'Sign in', ru: ' Войти'}[lang]}</Link>
                </span>
            </> :
                <span className={styles.auth} onClick={signout}>
                    {{en: 'Sign out', ru: 'Выйти'}[lang]}
                 </span>
            }
          <span className={styles.langButtons}>
            <span className={styles.langButton1} title={{en:'English',ru:'Английский'}[lang]}
                  onClick={()=>setLang('en')}>EN</span>
            <span className={styles.langButton2} title={{en:'Russian',ru:'Русский'}[lang]}
                  onClick={()=>setLang('ru')}>RU</span>
          </span>
        </p>
        <h1 className={styles.title}>Todo App</h1>
        <SwitchPanel activeList={activeList} setActiveList={setActiveList} lang={lang}/>

        <TodoForm lang={lang}/>

        <Buttons todos={todos} countUnactive={countUnactive}
                 searchRequest={searchRequest} setSearchRequest={setSearchRequest}
                 searchSortItem={query.sort} lang={lang}
                 />

        <TodoList todos={todos} lang={lang}
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
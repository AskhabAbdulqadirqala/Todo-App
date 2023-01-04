import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { fillTodoList, addLogin } from "./redux/actions";

import TodoApp from './components/TodoApp.js'
import Registration from './components/Registration.js'
import SignIn from './components/SignIn.js'

import './App.css'

function App() {
    let login = getCookie('LOGIN');
    const [userIsAuth, setAuth] = useState(login);
    const [lang, setLang] = useState('en');
    const dispatch = useDispatch();

    if (login) {
      fetch('http://localhost:5000/auth/login', {
          method: 'POST',
          headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json'
          }),
          body: JSON.stringify({username: login})
    }).then(response => response.text())
      .then(response => {
            let res = JSON.parse(response);
            if (!res.message) {
                  dispatch(fillTodoList(res.todos))
                  dispatch(addLogin(login))
            }
      })
}
return (
   <BrowserRouter>
      <div className="App">
            <Routes>
                  <Route index 
                         element={<TodoApp className='todoApp' 
                                           lang={lang} 
                                           setLang={setLang} 
                                           userIsAuth={userIsAuth} 
                                           setAuth={setAuth}/>}
                  />

                  <Route path='/registration'
                         element={userIsAuth ? (<Navigate to="/"/>) 
                                             : (<Registration setAuth={setAuth} lang={lang}/>)}
                  />

                  <Route path='signin'
                         element={userIsAuth ? (<Navigate to="/"/>) 
                                             : <SignIn setAuth={setAuth} 
                                  lang={lang}/>}
                  />
                  <Route path='*' element={<Navigate to='' />} />
            </Routes>
      </div>
   </BrowserRouter> 
   )
}

function getCookie(name) {
 var value = "; " + document.cookie;
 var parts = value.split("; " + name + "=");
 return (parts.length == 2) ? parts.pop().split(";").shift() : false;
}


export default App
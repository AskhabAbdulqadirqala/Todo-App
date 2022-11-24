import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import TodoApp from './components/TodoApp.js'
import Registration from './components/Registration.js'
import SignIn from './components/SignIn.js'
import './App.css'

function App() {
  const [userIsAuth, setAuth] = useState(false);
  const [lang, setLang] = useState('en');
  return (
   <BrowserRouter>
    <div className="App">
     <Routes>
      <Route index element={<TodoApp className='todoApp' lang={lang} setLang={setLang} userIsAuth={userIsAuth} setAuth={setAuth}/>}/>

      <Route path='/registration'
            element={userIsAuth ? (<Navigate to="/"/>) : (<Registration setAuth={setAuth} lang={lang}/>)}
      />

      <Route path='signin'
            element={userIsAuth ? (<Navigate to="/"/>) : <SignIn setAuth={setAuth} lang={lang}/>}
      />
      <Route path='*' element={<Navigate to='' />} />
     </Routes>
    </div>
   </BrowserRouter> 
  )
}

export default App
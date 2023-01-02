import { useState } from 'react'
import { useDispatch } from "react-redux";
import { fillTodoList, addLogin } from "../redux/actions";

import styles from './universalStyles/auth.module.css'

function SignIn({ setAuth, lang }) {
  const [data, setData] = useState({login: '', password: ''});
  const [authError, setAuthError] = useState(false);
  const dispatch = useDispatch();
  function onSubmitHandler(event) {
    event.preventDefault();
	fetch('http://localhost:5000/auth/login', {
		  method: 'POST',
		  headers: new Headers({
			  Accept: 'application/json',
			  'Content-Type': 'application/json'
		  }),
		  body: JSON.stringify({username: data.login, password: data.password})
	})
		  .then(response => response.text())
		  .then(response => {
			  let res = JSON.parse(response);
			  if (!res.message) {
				  dispatch(fillTodoList(res.todos))
				  dispatch(addLogin(data.login))
				  setAuthError(false);
				  setData({name: '', password: ''});
				  setAuth(true);
			  }
			  setAuthError({en:'Wrong login or password', ru: 'Неправильный пароль или логин'}[lang]);
		  })
  }

	return (
		<div>
		 <h1>{{en:'Sign in',ru:'Вход'}[lang]}</h1>

		 <form onSubmit={onSubmitHandler} className={styles.form}>
	        <p className={styles.label}>{{en:'Login',ru:'Логин'}[lang]}</p>
		 	       <input
		 	         type='text'
		 	         className={styles.input}
		 	         placeholder={{en: 'Enter your login',ru:'Введите ваш логин'}[lang]}
		 	         value={data.login}
		 	         onChange={(e) => setData({...data, login: e.target.value})}
		 	         required
		 	     />
	        <p className={styles.label}>{{en:'Password',ru:'Пароль'}[lang]}</p>
		 	        <input
		 	          type='password'
		 	          placeholder={{en:'Enter your password',ru:'Введите ваш пароль'}[lang]}
		 	          className={styles.input}
		 	          value={data.password}
		 	          onChange={(e) => setData({...data, password: e.target.value})}
		 	          required
		 	        />
		 	        <button type="submit" className={styles.submit}>{{en:'Submit',ru:'Отправить'}[lang]}</button>
	     </form>
		<p>{!!authError && authError}</p>
		</div>
	)
}


export default SignIn;
import { useState } from 'react'
import styles from './universalStyles/auth.module.css'
import {useDispatch, useSelector} from "react-redux";
import { addLogin } from "../redux/actions";


function Registration({ setAuth, lang }) {
  const [data, setData] = useState({login: '', email: '', password: ''});
  const [authError, setAuthError] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector(state => {
		const { todoAppReducer } = state;
		return todoAppReducer.todos;
  });
  function onSubmitHandler(event) {
    event.preventDefault();

	fetch('http://localhost:5000/auth/registration', {
		  method: 'POST',
		  headers: new Headers({
			  Accept: 'application/json',
			  'Content-Type': 'application/json'
		  }),
		  body: JSON.stringify({username: data.login,
			  									email: data.email,
			  									password: data.password,
		  										todos})
	})
		  .then(response => response.text())
		  .then(response => {
			  let res = JSON.parse(response);
			  if (res.message === 'User successfully authorised') {
				  dispatch(addLogin(data.login))
				  document.cookie = 'LOGIN=' + data.login + '; path=/;';
				  setAuthError(false);
				  setData({name: '', email: '', password: ''});
				  setAuth(true);
			  }
			  else setAuthError(res.message);
		  })
  }

	return (
		<div>
		 <h1>{{en:'Registration',ru:'Регистрация'}[lang]}</h1>
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
		 	    <p className={styles.label}>Email</p>
	        <input
	          // type='email'
	          type='text'
	          placeholder={{en:'Enter your email',ru:'Введите ваш email'}[lang]}
	          value={data.email}
	          className={styles.input}
	          onChange={(e) => setData({...data, email: e.target.value})}
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


export default Registration;
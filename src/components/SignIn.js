import { useState } from 'react'
import styles from './universalStyles/auth.module.css'

function SignIn({ setAuth, lang }) {
  const [data, setData] = useState({login: '', email: '', password: ''});

  function onSubmitHandler(event) {
    event.preventDefault();
	setData({name: '', email: '', password: ''});
    setAuth(true);
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
		</div>
	)
}


export default SignIn;
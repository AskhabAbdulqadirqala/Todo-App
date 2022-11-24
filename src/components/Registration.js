import { useState } from 'react'
import styles from './universalStyles/auth.module.css'


function Registration({ setAuth, lang }) {
  const [data, setData] = useState({login: '', email: '', password: ''});

  function onSubmitHandler(event) {
    event.preventDefault();
    // добавление в базу
    setData({name: '', email: '', password: ''});
    setAuth(true);
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
		</div>
	)
}


export default Registration;
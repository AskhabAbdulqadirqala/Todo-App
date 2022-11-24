import styles from './SwitchPanel.module.css'

function SwitchPanel ({activeList, setActiveList, lang}) {

	function generateButton(num, text){
		return <h3 className={(activeList===num) ? styles.activeButton : styles.button}
				onClick={() => setActiveList(num)}>{text}</h3>
	}

	return (
		<div className={styles.panel}>
			{generateButton(1, {en: 'All', ru: 'Все'}[lang])}
			{generateButton(2, {en: 'Active', ru: 'Активные'}[lang])}
			{generateButton(3, {en: 'Completed', ru: 'Завершённые'}[lang])}
		</div>
	)
}


export default SwitchPanel
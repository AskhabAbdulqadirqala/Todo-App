import styles from '../Buttons.module.css'
import promptStyles from '../../universalStyles/promptText.module.css'
import { BiSort } from 'react-icons/bi'

export default function SortButton({ changeSort, lang }) {
	return (
			    <p>
            <span className={promptStyles.tooltip}>
              <BiSort className={styles.button} onClick={()=>changeSort()}/>
              <span className={promptStyles.tooltiptext}>{{en: 'Sort', ru: 'Сортировка'}[lang]}</span>
            </span>
          </p>
	)
}
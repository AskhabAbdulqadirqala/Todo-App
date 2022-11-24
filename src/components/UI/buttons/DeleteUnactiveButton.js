import styles from '../Buttons.module.css'
import promptStyles from '../../universalStyles/promptText.module.css'
import { AiOutlineDelete } from "react-icons/ai";

export default function DeleteUnactiveButton({ deteleUnactive, countUnactive, lang }) {
	return (
			<p onClick={deteleUnactive}>
            <span className={promptStyles.tooltip}>
              <AiOutlineDelete className={countUnactive ? styles.button : styles.unactiveButton}/>
              <span className={promptStyles.tooltiptext}>{{en:'Remove completed todos', ru: 'Удалить заверщённые'}[lang]}</span>
            </span>
      </p>
	)
}
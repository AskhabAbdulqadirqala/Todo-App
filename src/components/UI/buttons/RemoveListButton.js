import styles from '../Buttons.module.css'
import promptStyles from '../../universalStyles/promptText.module.css'
import { AiOutlineClear } from "react-icons/ai";

export default function RemoveListButton({ setTodos, lang }) {
	return (
			<p onClick={() => setTodos([])}>
            <span className={promptStyles.tooltip}>
              <AiOutlineClear className={styles.button}/>
              <span className={promptStyles.tooltiptext}>{{en:'Remove list', ru:'Удалить всё'}[lang]}</span>
            </span>
          </p>
	)
}
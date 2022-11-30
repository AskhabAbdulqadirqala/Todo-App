import styles from '../Buttons.module.css'
import promptStyles from '../../universalStyles/promptText.module.css'
import { AiOutlineDelete } from "react-icons/ai";
import { deteleUnactiveRed } from "../../../redux/actions";
import {useDispatch} from "react-redux";

export default function DeleteUnactiveButton({ countUnactive, lang }) {
    const dispatch = useDispatch();
	return (
			<p onClick={() => dispatch(deteleUnactiveRed())
            }>
            <span className={promptStyles.tooltip}>
              <AiOutlineDelete className={countUnactive ? styles.button : styles.unactiveButton}/>
              <span className={promptStyles.tooltiptext}>{{en:'Remove completed todos', ru: 'Удалить заверщённые'}[lang]}</span>
            </span>
      </p>
	)
}
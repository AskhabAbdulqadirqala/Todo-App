import styles from '../Buttons.module.css'
import promptStyles from '../../universalStyles/promptText.module.css'
import { AiOutlineClear } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeListRed } from "../../../redux/actions";

export default function RemoveListButton({ lang }) {
    const dispatch = useDispatch();
	return (
			<p onClick={() => {
                dispatch(removeListRed());
            }}>
            <span className={promptStyles.tooltip}>
              <AiOutlineClear className={styles.button}/>
              <span className={promptStyles.tooltiptext}>{{en:'Remove list', ru:'Удалить всё'}[lang]}</span>
            </span>
          </p>
	)
}
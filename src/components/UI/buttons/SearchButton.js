import styles from '../Buttons.module.css'
import promptStyles from '../../universalStyles/promptText.module.css'
import { AiOutlineSearch } from "react-icons/ai";
import { ImCross } from "react-icons/im";

export default function SearchButton({ lang, setSearchButtonActive, isSeachButtonActive, setSearchRequest, searchRequest }) {
	return (
        <p>
            <span className={promptStyles.tooltip}>
              <AiOutlineSearch className={styles.button} onClick={()=>{setSearchButtonActive(!isSeachButtonActive); setSearchRequest('')}}/>
              <span className={promptStyles.tooltiptext}>{{en: 'Search', ru: 'Поиск'}[lang]}</span>
              <span className={isSeachButtonActive ? styles.search : styles.hiddenBtn}>
                <ImCross className={styles.cross} 
                         onClick={()=>{setSearchButtonActive(false); setSearchRequest('')}}/>
                         <span>{{en: 'Enter search-request', ru: 'Введите запрос'}[lang]}</span>
                         <input type="text" value={searchRequest} onChange={(e) => setSearchRequest(e.target.value)}></input>
              </span>
            </span>
        </p>
	)
}
import { useState } from 'react'
import {useLocation, useSearchParams} from 'react-router-dom'

import RemoveListButton from './buttons/RemoveListButton.js'
import DeleteUnactiveButton from './buttons/DeleteUnactiveButton.js'
import SortButton from './buttons/SortButton.js'
import SearchButton from './buttons/SearchButton.js'

import styles from './Buttons.module.css'
import queryString from "query-string";


function Buttons( {todos, countUnactive, searchRequest, setSearchRequest, lang} ) {
  const [searchSort, setSearchSort] = useState('new');
  const [isSeachButtonActive, setSearchButtonActive] = useState(false);
    const location = useLocation();
    const query = queryString.parse(location.search)
    const [, setSearchParams] = useSearchParams();
    function navigateTo(key, newLoc){
        setSearchParams({...query, [key]: newLoc})
  }

  function changeSort(){
    if (searchSort==='new') {
      navigateTo('sort', 'new')
      setSearchSort('old')
    }
    else{
      navigateTo('sort', 'old')
      setSearchSort('new')
    }
  }

  return (Boolean(todos.length) &&
          <div className={styles.buttons}>
          <RemoveListButton lang={lang}/>

          <DeleteUnactiveButton countUnactive={countUnactive} lang={lang}/>

          <SortButton changeSort={changeSort} lang={lang}/>

          <SearchButton setSearchButtonActive={setSearchButtonActive} isSeachButtonActive={isSeachButtonActive}
                        searchRequest={searchRequest} setSearchRequest={setSearchRequest}
                        lang={lang}/>
          
        </div>)
  }
export default Buttons

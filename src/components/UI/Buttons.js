import { useState } from 'react'

import RemoveListButton from './buttons/RemoveListButton.js'
import DeleteUnactiveButton from './buttons/DeleteUnactiveButton.js'
import SortButton from './buttons/SortButton.js'
import SearchButton from './buttons/SearchButton.js'

import styles from './Buttons.module.css'


function Buttons( {todos, setTodos, deteleUnactive, countUnactive, setSearchRequest, searchRequest, navigateTo, searchSortItem, lang} ) {
  const [searchSort, setSearchSort] = useState('new');
  const [isSeachButtonActive, setSearchButtonActive] = useState(false);

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
          <RemoveListButton setTodos={setTodos} lang={lang}/>

          <DeleteUnactiveButton deteleUnactive={deteleUnactive} countUnactive={countUnactive} lang={lang}/>

          <SortButton changeSort={changeSort} lang={lang}/>

          <SearchButton setSearchButtonActive={setSearchButtonActive} isSeachButtonActive={isSeachButtonActive} setSearchRequest={setSearchRequest} searchRequest={searchRequest} lang={lang}/>
          
        </div>)
  }
export default Buttons

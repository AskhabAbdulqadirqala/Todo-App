import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, lang, deleteTodo, deteleUnactive, setTodos, activeList, searchRequest, searchSortItem }) {
  let output;
  switch(activeList) {
    case 2: output = todos.filter((item) => item.activity===true); break;
    case 3: output = todos.filter((item) => item.activity===false); break;
    default: output = todos; break;
  };

  if (searchRequest) 
    output = output.filter((item) => item.text.toUpperCase().includes(searchRequest.toUpperCase()));
  
  if (searchSortItem === 'old')
    output.sort(sortByCrDateOld)
  else if (searchSortItem === 'new')
     output.sort(sortByCrDateNew)


  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>{{en: 'Todo list is empty', ru:'Список задач пуст'}[lang]}</h2>}
      {!!todos.length && !output.length && !!searchRequest && <h2 style={{marginTop: '30px'}}>{{en:'No such todo', ru:'Ничего не найдено'}[lang]}</h2>}
      {!!todos.length && (activeList===3) && !output.length && <h2>{{en:'No completed todos', ru:'Нет завершённых задач'}[lang]}</h2>}
      {!!todos.length && (activeList===2) && !output.length && <h2>{{en:'No active todos', ru:'Нет активных задач'}[lang]}</h2>}
      {output.map((todo) => <Todo todo={todo} key={todo.id} todos={todos} 
                                  deleteTodo={deleteTodo} setTodos={setTodos} lang={lang}/>)}
    </div>
  )
}

function sortByCrDateOld(a, b){
    let aCrDate = a.createdDate, bCrDate = b.createdDate;
    return srt(aCrDate, bCrDate, 1);
}
function srt(a, b, res){
    if (a > b) return res;
    if (a === b) return 0;
    if (a < b) return -res;
}
function sortByCrDateNew(a, b){
    let aCrDate = a.createdDate, bCrDate = b.createdDate;
    return srt(aCrDate, bCrDate, -1);
}

export default TodoList

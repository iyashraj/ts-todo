import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import './styles.css'

interface TodosProps{
    todos: Todo[]
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todolist = ({todos, setTodos} : TodosProps) => {
    // console.log(todos)
  return (
    <div className="todos">
     {todos.map((todo)=>(
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
))}
    </div>
  )
}

export default Todolist
import task from '../Task.png'
import Todo from './Tasklist/ToDo';
import TodoList from './Tasklist/ToDoList';
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo} from './Tasklist/TodoSlice'
function TaskList() {
  const todos=useSelector(state=>state.todos);
  console.log(todos);
  return (
    <div className='flex flex-col'>
    <div>
        <h1 className='text-3xl font-semibold text-blue-200 m-4'>List Your Task Here</h1>
      <Todo/>
       {todos.map(({id,text})=><TodoList id={id} text={text}/>)}
    </div>
    <img src={task} alt=""  className='h-80 w-80 fixed bottom-10'/>
    </div>
  );
}

export default TaskList;

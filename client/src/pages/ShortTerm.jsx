import task from '../Task.png'

import TodoList from '../Component/Profile/ToDoList';
import Todo from '../Component/Profile/Short';

import { useSelector,useDispatch } from 'react-redux'
//import { removeTodo} from './Profile/TodoSlice'
function ShortTerm() {
    const todos = useSelector(state => state.todos); // Adjust the key based on your state structure
//     const topics = useSelector(state => state.topics);
//   const durations=useSelector(state=>state.durations);


  console.log(todos);
  return (
    <div className='flex flex-col'>
    <div>
        <h1 className='text-3xl font-semibold text-blue-200 m-4'>List Your Short Term Goals</h1>
      <Todo/>
       {todos.map(({id,text})=><TodoList id={id} text={text}  />)}
       {/* {topics.map(({id,text})=><TodoList id={id} text={text}  />)} */}
       {/* {durations.map(({id,duration})=><TodoList id={id}  duration={duration} />)} */}
    </div>
    <img src={task} alt=""  className='h-80 w-80 fixed bottom-10'/>
    </div>
  );
}

export default ShortTerm;
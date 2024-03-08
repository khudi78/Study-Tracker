import { createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    todos:[],
   topics:[],
   durations:[]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           // const todo={
                // id:nanoid(),
                // text:action.payload,
                // 
                const [ text, topic, duration ] = action.payload;

                const todo = {
                  id: nanoid(),
                  text,
                  isChecked:"false"
            }

            const podo = {
                id: nanoid(),
                
                topic,
              
               isChecked:"false"
          }

          const kodo = {
            id: nanoid(),
            
           duration,
           isChecked:"false"
      }
            state.todos.push(todo)
            state.topics.push(podo)
            state.durations.push(kodo)
            
            //state.topic.push(todo)
            //state.duration.push(todo)


        },
        removeTodo:(state,action)=>{
          state.todos=state.todos.filter(todo=>todo.id!==action.payload);
          state.topics=state.topics.filter(podo=>podo.id!==action.payload);
          state.durations=state.durations.filter(duration=>duration.id!==action.payload);
        }

    }
})

export const {addTodo,removeTodo}=todoSlice.actions;

export default todoSlice.reducer;
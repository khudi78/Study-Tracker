import { createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                //text:action.payload,
                text:action.payload.input,
                time:action.payload.time,
                isChecked:"false"

            }
            state.todos.push(todo)

        },
        removeTodo:(state,action)=>{
          state.todos=state.todos.filter(todo=>todo.id!==action.payload);
        },
        UpdateTodo:(state,action)=>{
         const index = state.todos.findIndex(obj => obj.id === action.payload.id);
         console.log(action.payload.id);
         console.log(index);
          if(index!==-1){
            state.todos[index]={
                ...state.todos[index],
                completed:action.payload.minutes,
              }
          }
        }

    }
})

export const {addTodo,removeTodo,UpdateTodo}=todoSlice.actions;

export default todoSlice.reducer;
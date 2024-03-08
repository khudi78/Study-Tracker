import { useContext,createContext,useReducer } from "react";
import StudyReducer from '../Reducer/StudyReducer';
const intialState={
    studygoal:[]
}

const StudyGoal=createContext();

const StudyProvider=({children})=>{
    const[{studygoal},StudyDispatch]=useReducer(StudyReducer,intialState);
    
    return(
        <StudyGoal.Provider value={{studygoal,StudyDispatch}}>
            {children}
        </StudyGoal.Provider>
    )
};

const useStudy=()=>useContext(StudyGoal);

export {StudyProvider,useStudy};

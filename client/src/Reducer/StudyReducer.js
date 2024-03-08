import React from 'react'

function StudyReducer(state,{type,payload}) {
   switch (type){
       case "STUDYGOAL":
         return{
            ...state,
            studygoal:[...state.studygoal,{ [payload.key]:payload.event }]
         }
   }
}

export default StudyReducer;
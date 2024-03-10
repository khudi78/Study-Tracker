import React from 'react'
  import SpeechRecognition, {
    useSpeechRecognition,
  } from "react-speech-recognition";
  import useClipboard from "react-use-clipboard";
  import { useState } from "react";
  import {useContext} from "react"
  import { UserContext } from '../context/userContext';
  import {toast} from 'react-hot-toast'
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  
function MicDrop() {
    const {user} =useContext(UserContext)
    const navigate=useNavigate()
  const userId = user?.id;
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000,
      });
      const[hour,SetHour]=useState(0);
      const startListening = () =>
        SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
      const { transcript, browserSupportsSpeechRecognition } =
        useSpeechRecognition();
          
        const AddMic = async (textToCopy,hour) => {
            //e.preventDefault();
            //const {subject,topic,duration}= data
            console.log("heloo")
            console.log("transcript",textToCopy)
            console.log("hour" ,hour)
            try{
               const {data} = await axios.put(`/getTask/${userId}`,{
                 textToCopy,hour
               })
        
               if(data.error){
                toast.error(data.error)
               }else{
                
                toast.success('voice goal added!')
                navigate('/login')
               }
               
            }catch(error){
        
            }
          }
       
          
          const askDuration=()=>{
            const data=window.prompt("Enter the Hour")
            SetHour(data);
            AddMic(textToCopy,data);
            SpeechRecognition.stopListening()
         }
  return (
    <div className='text-white'>
           <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl font-bold text-blue-200 text-center mb-6 mt-6">
            Add your task with your voice
          </h2>
  
          <div
            className="main-content border border-gray-200 rounded-lg  gap-2 p-4 w-[60%] flex flex-col justify-end items-end bg-black/70 shadow-gray shadow-2xl"
            onClick={() => setTextToCopy(transcript)}
          >
            <button
              className="justify-end text-green-950 bg-green-200 font-medium rounded-xl p-1"
              onClick={setCopied}
            >
              {isCopied ? "Copied!" : "Copy "}
            </button>
            <p className="text-md text-white font-medium">{transcript}</p>
          </div>
  
          <div className="flex justify-center space-x-4">
            <button
              className="btn-style bg-cyan-400 h-11 w-11 flex items-center justify-center text-red-900 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-opacity-50 hover:bg-teal-600 mt-10 focus:bg-red-200"
              onClick={startListening}
            >
              <span class="material-symbols-outlined">mic</span>
            </button>
            <button
              className="btn-style bg-cyan-400 text-red-900 h-11 w-11 flex items-center justify-center rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-red-900 focus:bg-red-200 focus:ring-opacity-50 hover:bg-teal-600 mt-10"
              onClick={askDuration}
            >
              <span class="material-symbols-outlined">stop_circle</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default MicDrop
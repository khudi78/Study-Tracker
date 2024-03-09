import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const Mic = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Speech to Text Converter</h2>
                <p className="max-w-2xl text-center text-gray-700 mb-10">A React hook that converts speech from the microphone to text and makes it available to your React components.</p>

                <div className="main-content border border-gray-200 rounded-lg shadow-md p-6 mb-8" onClick={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="flex justify-center space-x-4">
                    <button className="btn-style bg-teal-500 text-white px-6 py-3 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 hover:bg-teal-600" onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button className="btn-style bg-teal-500 text-white px-6 py-3 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 hover:bg-teal-600" onClick={startListening}>Start Listening</button>
                    <button className="btn-style bg-teal-500 text-white px-6 py-3 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 hover:bg-teal-600" onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                </div>
            </div>
        </>
    );
};

export default Mic;

import { useCallback, useState } from "react"

export const useSpeechSynthesisApi = () => {
    const[text, setText] = useState<string>("");
    const[isSpeaking, setIsSpeaking] = useState<boolean>(false);
    const[isPause, setIsPause] = useState<boolean>(false);
    const[hasEnd, setHasEnd] = useState<boolean>(false);

    const speak = useCallback(() => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        setIsSpeaking(true);
        setHasEnd(false);
    },[text]); 

    const pause = useCallback(() => {
        window.speechSynthesis.pause();
        setIsPause(true);
        setIsSpeaking(false);
        setHasEnd(false);
    },[])

    const cancel = useCallback(() => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPause(false);
        setHasEnd(true);
    },[]);

    return{
        text,
        setText,
        isSpeaking,
        isPause,
        hasEnd,
        speak,
        pause,
        cancel
    }

}
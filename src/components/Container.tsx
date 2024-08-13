'use client'
import { useSpeechSynthesisApi } from "@/hooks/useSpeechSynthesisApi"
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Container(){
    const{
        text,
        setText,
        isSpeaking,
        isPause,
        hasEnd,
        speak,
        pause,
        cancel
    } = useSpeechSynthesisApi();

    return(
        <div className="flex flex-col gap-4">
            <div>
                <Input
                value={text}
                onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div className="justify-between gap-2 flex">
                <Button onClick={speak} className="w-24">Speak</Button>
                <Button onClick={cancel} className="w-24">Stop</Button>

            </div>
        </div>
    );
} 
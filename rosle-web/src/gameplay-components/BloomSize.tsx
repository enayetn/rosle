import { useState } from "react";

interface IBloomSize {
    bloomSize: number
}

function BloomSize({ updateAnswer }: { updateAnswer: (answer: any) => void}) {
    const [bloomSize, setBloomSize] = useState<IBloomSize>({bloomSize: 2});

    return <div>
        <h3 className="text-xl text-left py-2">Bloom Size</h3>
        <div className="grid grid-cols-3 gap-4">
            <b className="text-3xl text-pink-900">{bloomSize.bloomSize}"</b>
            <input 
                id="bloom-size" 
                type="range" 
                min="1" 
                max="6" 
                value={bloomSize.bloomSize} 
                onChange={(e) => {
                    const newBloomSize = parseInt(e.target.value);
                    setBloomSize({bloomSize: newBloomSize})
                    updateAnswer(newBloomSize)
                }}
                step="1" 
                className="col-span-2 m-2 w-full h-5 bg-pink-900 rounded-lg appearance-none cursor-pointer dark:bg-pink-600"></input>
        </div>
    </div>
}

export {BloomSize};
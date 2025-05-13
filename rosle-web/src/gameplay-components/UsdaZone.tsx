import { useState } from "react"

interface IUsdaZone {
    zoneVal: number
}

function UsdaZone({ updateAnswer }: { updateAnswer: (answer: any) => void}) {
    const [zone, setZoneVal] = useState<IUsdaZone>({zoneVal: 4});

    return <div>
        
        <h3 className="text-xl text-left py-2 font-bold">Minimum USDA Growing Zone</h3>
        <div className="grid grid-cols-3 gap-4">
            <b className="text-3xl text-pink-900">{zone.zoneVal}</b>
            <input 
                id="usda-range" 
                type="range" 
                min="1" 
                max="10" 
                value={zone.zoneVal} 
                onChange={(e) => {
                    const newUsdaZone = parseInt(e.target.value);
                    setZoneVal({zoneVal: newUsdaZone})
                    updateAnswer(newUsdaZone)
                }}
                step="1" 
                className="col-span-2 m-2 w-full h-5 bg-pink-900 rounded-lg appearance-none cursor-pointer dark:bg-pink-600"></input>
        </div>
    </div>
}

export {UsdaZone}
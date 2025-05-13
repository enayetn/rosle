import { useState } from "react";
import { NiceButton } from "../utility-components/NiceButton";

const PetalCounts = {
    SINGLE: "single",
    SEMI_DOUBLE: "semi-double",
    DOUBLE: "double",
    FULL: "full",
    VERY_FULL: "very-full"
  }

function PetalCount({ updateAnswer }: { updateAnswer: (answer: any) => void}) {
    const petalCounts = [
        {label: "Single Bloom \n(1-7 petals)", value: PetalCounts.SINGLE},
        {label: "Semi-Double Bloom \n(8-15 petals)", value: PetalCounts.SEMI_DOUBLE},
        {label: "Double Bloom \n(16-25 petals)", value: PetalCounts.DOUBLE},
        {label: "Full Blooms \n(26-40 petals)", value: PetalCounts.FULL},
        {label: "Very Full Blooms \n(40+ petals)", value: PetalCounts.VERY_FULL}
    ]
    const [selectedCount, setSelectedCount] = useState<string>("");
    return <div>
        <h3 className="text-xl text-left py-2">Petal Count</h3>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            {petalCounts.map((petalCount, key) => {
                return <NiceButton key={key}
                    title={petalCount.label} 
                    highlight={selectedCount === petalCount.value ? true : false}
                    onclick={() => {
                        updateAnswer(petalCount.value);
                        setSelectedCount(petalCount.value);
                    }} />
            })}
        </div>
    </div>
}

export {PetalCount};
export type { PetalCounts };
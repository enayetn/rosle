/**
 * Bloom Shapes
 * - Cupped
 * - Flat
 * - Globular
 * - High Centered
 * - Quartered
 * - Rosette
 * - Pompon
 * - Urn
 */

import { useState } from "react";
import { NiceButton } from "../utility-components/NiceButton"

function BloomShape({ updateAnswer }: { updateAnswer: (answer: any) => void}) {
    const [selectedShape, setSelectedShape] = useState<string>("");
    const bloomShapes = [
        {label: "Cupped", value: "cupped"},
        {label: "Flat", value: "flat"},
        {label: "Globular", value: "globular"},
        {label: "High Centered", value: "high-centered"},
        {label: "Quartered", value: "quarter"},
        {label: "Rosette", value: "rosette"},
        {label: "Pompon", value: "pompon"},
        {label: "Urn", value: "urn"}
    ];
    return <div>
        <h3 className="text-xl text-left py-2">Bloom Shape</h3>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            {bloomShapes.map((shape, key) => {
                return <NiceButton key={key}
                    title={shape.label}
                    highlight={selectedShape === shape.value ? true : false}
                    onclick={() => {
                        updateAnswer(shape.value);
                        setSelectedShape(shape.value);
                    }} 
                />
            })}
        </div>
    </div>
}


export {BloomShape}
import type { ReactNode } from "react"

function NiceCard({children}: {children: ReactNode}) {
    return <a href="#" className="m-1 block max-w-sm p-6 bg-white rounded-md shadow-sm hover:bg-pink-800 dark:bg-pink-950 dark:border-gray-700">
        {children}
    </a>
}

export {NiceCard}
import React from "react"

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Pill({ children, className = "", ...props }: PillProps) {
    return (
        <div
            className={`px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

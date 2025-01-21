interface ButtonProps {
    onClick: () => void;
    label: string;
}

export function Button({ onClick, label }: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded mx-1"
        >
            {label}
        </button>
    )
}


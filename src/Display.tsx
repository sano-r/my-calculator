interface DisplayProps{
    value: string;
}

export function Display({value}: DisplayProps){
    return(
        <div>
            {value}
        </div>
    );
}
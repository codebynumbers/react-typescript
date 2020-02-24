import React from 'react';

type changeHandlerFunction = (event: React.ChangeEvent<HTMLInputElement>) => void;

type AddendProps = {
    name: string,
    value: string,
    handleChange: changeHandlerFunction
};

export default function Addend(props: AddendProps) {
    return (
         <input name={props.name} type="text" value={props.value} onChange={props.handleChange}/>
    );
}
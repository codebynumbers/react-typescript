import React, {useState} from 'react';
import './App.css';
import Addend from './Addend'

export default function App() {
    const [a, setA] = useState('')
    const [b, setB] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        if (event.target.name == 'a') {
            setA(event.target.value)
        } else {
            setB(event.target.value)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <Addend name='a' value={a} handleChange={handleChange} /> +
                <Addend name='b' value={b} handleChange={handleChange} /> = {tryAdd(a, b)}
            </header>
        </div>
    );
}

function tryAdd(a: string, b: string): string {
    let a_flt = parseFloat(a);
    let b_flt = parseFloat(b);
    let result = add(a_flt, b_flt)
    return isNaN(result) ? '' : result.toString();
}

function add(a: number, b: number): number {
    return a + b;
}

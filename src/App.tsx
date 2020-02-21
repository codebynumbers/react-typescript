import React from 'react';
import './App.css';
import Addend from './Addend'

type AppState = { a: string, b: string };

export default class App extends React.Component<{}, AppState> {
    constructor(props: object) {
        super(props);
        this.state = {
            a: '',
            b: ''
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <Addend name='a' value={this.state.a} handleChange={this.handleChange} /> +
                    <Addend name='b' value={this.state.b} handleChange={this.handleChange} /> = {tryAdd(this.state.a, this.state.b)}
                </header>
            </div>
            );
    }
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

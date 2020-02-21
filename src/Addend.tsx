import React from 'react';

type changeHandlerFunction = (event: React.ChangeEvent<HTMLInputElement>) => void;
type AddendProps = { name: string, value: string, handleChange: changeHandlerFunction };

export default class Addend extends React.Component<AddendProps> {

    render() {
        return (
             <input name={this.props.name} type="text" value={this.props.value} onChange={this.props.handleChange}/>
        );
    }
}
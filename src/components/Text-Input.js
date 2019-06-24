import * as React from 'react';

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'Enter Your Name'
        }
    }

    onChangeHandler(event) {
        const data = event.target.value;
        this.setState((state, props) => {
            return {
                inputValue: data
            }
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeHandler.bind(this)}/>
                <span>{this.state.inputValue}</span>
            </div>
        )
    }
}

import * as React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this._timerID = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this._timerID);
    }

    _convertDateToString() {
        return this.state.date.toLocaleTimeString()
    }

    render(props) {
        return (
            <div>
                <span>{this._convertDateToString()}</span>
            </div>
        )
    }
}

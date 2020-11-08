import React from 'react';
import '../App.css';


export class Indicator extends React.Component {
    render() {
        this.state = {
            percentage: 50
        }
        return (
            <div>
                <ProgressBar percentage={this.state.percentage} />
            </div>
        )
    }
}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage} />
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
}
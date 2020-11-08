import React from 'react';
import '../App.css';
import {View} from "react-native-web";


export class Indicator extends React.Component {
    render() {
        this.state = {
            percentage: 50
        }
        return (
            <div>
                <ProgressBar percentage={this.state.percentage} />
                <View style={{flexDirection:'row', padding:'10px'}}>
                    <label> Sell </label>
                    <label> Hold </label>
                    <label> Buy </label>
                </View>
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
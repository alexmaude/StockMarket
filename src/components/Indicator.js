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
                <View style={{ flex: 1,
                    justifyContent: 'space-between',
                    flexDirection:'row',
                    padding:'10px'}}>
                        <View style={{width: 50}}>
                            <label> Sell </label>
                        </View>
                        <View style={{width: 50}}>
                            <label> Hold </label>
                        </View>
                        <View style={{width: 50}}>
                            <label> Buy </label>
                        </View>
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
import React from 'react';
import Dropdown from 'react-dropdown';
import '../App.css';
import {View} from "react-native";
import DatePicker from "react-datepicker";

const socialMedias = [
    'Twitter', 'Facebook', 'LinkedIn'
]

export class Form extends React.Component {

    render() {
        return (
            <View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <label>
                            Stock Symbol
                        </label>
                    </View>
                    <View style={{flex: 1}}>
                        <input className="myInput" type="text" name="symbol"/>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <label>
                            Social Media
                        </label>
                    </View>
                    <View style={{flex: 1}}>
                        <Dropdown className="myInput" options={socialMedias}/>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <label>
                            Date
                        </label>
                    </View>
                    <View style={{flex: 1}}>
                        <DatePicker className="myInput" />
                    </View>
                </View>
                <button className="myButton"> Get Recommendations</button>
            </View>
        )
    }
}
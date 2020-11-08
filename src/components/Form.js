import React from 'react';
import Dropdown from 'react-dropdown';
import '../App.css';
import { View } from "react-native";
import DatePicker from "react-datepicker";
import moment from "moment";
const socialMedias = [
    'Twitter', 'Facebook', 'LinkedIn'
]

/**
 * Form with 3 fields and a submit button
 * stock symbol, social media and date
 */
export class Form extends React.Component {
    constructor(props) {
        super(props);
        /**
         * Form values
         * @type {{date: Date, symbol: string, social: string}}
         */
        this.state = {
            symbol: '',
            social: '',
            date: new Date()
        }

        // TODO : set default date to now - 10 days
        //this.setState({date: moment(new Date()).subtract(10, 'days').format("MM/DD/YYYY")});

        this.symbolChange = this.symbolChange.bind(this);
        this.dateChange = this.dateChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler() {
        this.props.onSubmit(this.state);
    }

    symbolChange(event) {
        this.setState({symbol: event.target.value});
    }

    dateChange(date) {
        this.setState({date: date});
    }

    render() {
        return (
            <View style={{padding:'20px'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <label>
                            Stock Symbol
                        </label>
                    </View>
                    <View style={{flex: 1}}>
                        <input className="myInput" type="text" value={this.state.symbol} onChange={this.symbolChange}/>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <label>
                            Social Media
                        </label>
                    </View>
                    <View style={{flex: 1}}>
                        <Dropdown className="myInput" value={this.state.social} options={socialMedias} placeholder="." />
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <label>
                            Date
                        </label>
                    </View>
                    <View style={{flex: 1}}>
                        <DatePicker className="myInput"  placeholder="..." selected={this.state.date} onChange={this.dateChange}/>
                    </View>
                </View>
                <button className="myButton" onClick={this.submitHandler}>Calculate</button>
            </View>
        )
    }
}
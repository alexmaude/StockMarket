import React from 'react';
import { View, Text } from 'react-native';
import {Form} from './Form';
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker';
import chartlogo from '../assets/linechart.png';
import "react-datepicker/dist/react-datepicker.css";

import '../App.css';

const socialMedias = [
    'Twitter', 'Facebook', 'LinkedIn'
]
const defaultSocialMedia = socialMedias[0];

function App() {
  return (
    <div className="App">
        <View style={styles.container} flexDirection="column">
            <View style={{flex: 1}}>
              <header className="App-header">
                <img src={chartlogo} className="App-logo" alt="logo" />
                <p>
                  Stock Market
                </p>
              </header>
            </View>
            <View style={{flex: 2}}>
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
            <View style={{flex: 3}}>
                <p>
                    Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </p>
            </View>
        </View>
    </div>
  );
}

const styles = {
    container: {
        flex: 1
    }
}

export default App;

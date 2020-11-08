import React from 'react';
import { View, Text } from 'react-native';
import {Form} from './Form';
import {Indicator} from './Indicator';
import chartlogo from '../assets/linechart.png';
import "react-datepicker/dist/react-datepicker.css";

import '../App.css';

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
                <Form />
            </View>
            <View style={{flex: 3}}>
                <Indicator/>
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

import React from 'react';
import { View } from 'react-native';
import { Form } from './Form';
import { Indicator } from './Indicator';
import { getStockChances, stockPriceGenerator} from './StockCalculator';
import chartlogo from '../assets/linechart.png';
import "react-datepicker/dist/react-datepicker.css";
import network from '../assets/network.png';
import dollar from '../assets/dollar.png';

import '../App.css';

export class App extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            percentage: '0',
            price: '0',
            count: '0'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(form)
    {
        var results = getStockChances(form.symbol, form.social, this.date);
        this.setState({price: results.price, percentage: results.percentage, count: results.count});
    }

    render() {
        return (
            <div className="App">
                <View style={styles.container} flexDirection="column">
                    <View style={{flex: 2}}>
                        <header className="App-header">
                            <img src={chartlogo} className="App-logo" alt="logo"/>
                            <p>
                                Stock Market
                            </p>
                        </header>
                    </View>
                    <View style={{flex: 3}}>
                        <Form onSubmit={this.handleSubmit}/>
                    </View>
                    <View style={{flex: 3}}>
                        <label className={"price"}>
                            <img src={dollar} className="valuesLogos" alt="logo"/>
                            {this.state.price}
                        </label>
                        <label className={"price"}>
                            <img src={network} className="valuesLogos" alt="logo"/>
                            {this.state.count}
                        </label>
                        <Indicator value={this.state.percentage}/>
                    </View>
                    <p className={"info"}>
                        Icons made by <a href="https://www.flaticon.com/authors/freepik"
                                         title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
                                                                             title="Flaticon"> www.flaticon.com</a>
                    </p>
                </View>
            </div>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        height: '100vh'
    }
}

export default App;

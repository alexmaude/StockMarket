import logo from '../logo.svg';
import chartlogo from '../assets/linechart.png';
import {Form} from './Form';
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker';
import '../App.css';

const socialMedias = [
    'Twitter', 'Facebook', 'LinkedIn'
]
const defaultSocialMedia = socialMedias[0];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chartlogo} className="App-logo" alt="logo" />
        <p>
          Stock Market Dashboard
        </p>
      </header>
      <header className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </p>

      </header>
        <form>
            <label>
                Stock Symbol
                <input className="myInput2" type="text" name="symbol"/>
            </label>
        </form>
        <form>
            <label>
                Social Media
                <Dropdown className="myInput" options={socialMedias}/>
            </label>
        </form>
        <form>
            <label>
                Date
                <DatePicker className="myInput"/>
            </label>
        </form>

        <button className="myButton"> Get Recommendations</button>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './globalStyle.scss';
import './responsive.css';

function App() {
  return (
    <Router>
      {/* <Switch> */}
        <div id='App-container'>
          <Navbar />
        </div>
      {/* </Switch> */}
    </Router>
  );
}

export default App;

import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './util/theme';
import { GlobalStyles } from './util/globalStyle';
import Navbar from './components/navbar/Navbar';
import './globalStyle.scss';
import './responsive.css';

function App() {
  const theme = useSelector((state) => state.themeToggle.darkTheme);

  return (
    <Router>
      {/* <Switch> */}
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        {/* <div id='App-container'> */}
          <Navbar />
        {/* </div> */}
        {/* </Switch> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;

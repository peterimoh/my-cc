import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './util/theme';
import { GlobalStyles } from './util/globalStyle';
import Navbar from './components/navbar/Navbar';
import './globalStyle.css';
import './responsive.css';
import Home from './containers/home/Home';
import MobileNav from './components/mobile/MobileNav';

function App(props) {
  const theme = useSelector((state) => state.themeToggle.darkTheme);
 
  return (
    <Router>
      <Switch>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Wrapper>
            <Navbar />
            <MobileNav {...props}/>
        </Wrapper>
        <Route exact component={Home} />
      </ThemeProvider>
        </Switch>
    </Router>
  );
}

const Wrapper = styled.div`

    width: 80%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
  
`;

export default App;

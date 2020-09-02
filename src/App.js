import React from 'react';
import './App.css';
// import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import {unstable_createMuiStrictModeTheme} from '@material-ui/core/styles';
import {HashRouter as Router, Switch, Route,} from "react-router-dom";
import Footer from './components/Footer'

import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection'
import ArticleList from './components/ArticleList'
import ArticleDetail from './components/ArticleDetail'

const fontFamily = [
    // '微軟正黑體',
    // 'Consolas',
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');

let myTheme = unstable_createMuiStrictModeTheme({
    palette: {
        type: 'light'
    },
    typography: {
        fontFamily: fontFamily,
    },
});

const useStyles = {
    root: {
        flexGrow: 1,
        maxWidth: '100vw',
        minHeight: '100vh',
        padding: 0,
        textAlign: 'center',
    },
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: myTheme,
        };
        this.toggleDarkTheme = this.toggleDarkTheme.bind(this)
    }

    toggleDarkTheme = (event) => {
        let newPaletteType = this.state.theme.palette.type === "light" ? "dark" : "light";
        myTheme = unstable_createMuiStrictModeTheme({
            palette: {
                type: newPaletteType
            },
            typography: {
                fontFamily: fontFamily,
            },
        });
        this.setState({theme: myTheme});
    };

    render() {
        const {classes} = this.props;
        return (
            <Router>
                <MuiThemeProvider theme={myTheme}>
                    <CssBaseline/>
                    <Container className={classes.root}>
                        <Navbar theme={this.state.theme} onToggleDark={this.toggleDarkTheme}/>

                        <Switch>
                            <Route exact path="/">
                                <LandingSection/>
                                <ArticleList/>
                            </Route>
                            <Route exact path="/blog">
                                <LandingSection/>
                                <ArticleList/>
                            </Route>
                            <Route path="/blog/:uuid">
                                <ArticleDetail/>
                            </Route>
                            <Route exact path="/about">
                                <About/>
                            </Route>
                            <Route exact path="/category">
                                <Category/>
                            </Route>
                        </Switch>

                        <Footer/>
                    </Container>
                </MuiThemeProvider>
            </Router>
        );
    }
}

function About() {
    return <h2 style={{marginTop: '10vh', minHeight: 'calc(90vh - 64px - 164px)'}}>About</h2>;
}

function Category() {
    return <h2 style={{marginTop: '10vh', minHeight: 'calc(90vh - 64px - 164px)'}}>Category</h2>;
}

export default withStyles(useStyles)(App);

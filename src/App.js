import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Footer from "./components/Footer";
import Tabcontent from "./components/Section-app";
import SectionVideo from "./components/Section-video";
import SendMessage from "./components/Send-message";
import Tariflar from "./components/Tariflar";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route>
                            <Tariflar/>
                            <SendMessage/>
                            <SectionVideo/>
                            <Tabcontent/>
                        </Route>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;
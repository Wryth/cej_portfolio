import React from 'react';
import {
    Route,
    HashRouter
  } from "react-router-dom";

import './Main.css';
import MyHeader from './MyHeader.jsx';
import Bio from './Bio';
import InstagramDisplay from './InstagramDisplay.jsx';
import Downloads from './Downloads';
import SimpleSlider from "./SimpleSlider";
import Dropbox from "dropbox";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dbImgs: []
        };
    }

    componentDidMount() {
        const dbx = new Dropbox.Dropbox({ fetch: fetch , accessToken: process.env.REACT_APP_DBX_TOKEN });
        dbx.filesListFolder({path: ''})
            .then((res) => {
                return res.entries.map(x => x.path_lower)
            })
            .then((res) => {
                    //demo get all images from a dropbox folder. TODO When ready share the app folder with CEJ
                    Promise.all(res.map(x => dbx.filesGetTemporaryLink({ path: x })))
                        .then((result) => {
                            this.setState({ dbImgs: result }, () => { console.log(result) })
                        })
                        .catch((error) => {
                            console.error(error)
                        });
                }
            )
            .catch((error) => {
                console.error(error);
            });




    }

    render() {
        return(
            <HashRouter>
            <div className="mainContainer">
                <MyHeader />
                <div id="contentBox">
                    <Route path="/bio" component={ Bio }/>
                    <Route path="/downloads" component={ Downloads }/>
                    <Route path="/archive" render={(props) => <SimpleSlider {...props} isAuthed={true} dbImgs={this.state.dbImgs} key={this.state.dbImgs} />} />
                </div>
                <Route exact path="/" component={ InstagramDisplay }/>
            </div>
            </HashRouter>
        );
    }
}

export default Main;

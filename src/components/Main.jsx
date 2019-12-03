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
            dbImgs: [],
            igImg: 'https://www.instagram.com/p/B2OYGi-BfVG/media/?size=l',
        };
    }

    componentDidMount() {
        const dbx = new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN });
        dbx.filesListFolder({path: ''})
            .then((res) => {
                return res.entries.map(x => x.path_lower)
            })
            .then((res) => {
                    //demo get all images from a dropbox folder. TODO When ready share the app folder with CEJ
                    Promise.all(res.map(x => dbx.filesGetTemporaryLink({ path: x })))
                        .then((result) => {
                            this.setState({ dbImgs: result });
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }
            )
            .catch((error) => {
                console.error(error);
            });
        /* TODO access the instagram feed. Should not have to et usre access token
        fetch('https://api.instagram.com/oauth/authorize?app_id='
            + process.env.REACT_APP_IG_APP_ID + '&redirect_uri=https%3A%2F%2Fcarlemiljacobsen.com%2F&scope=&response_type=code')
            .then((result) =>{
                console.log(result);
            })
            .catch();

        // GET most recent image added to instagram
        fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=' + process.env.REACT_APP_IG_TOKEN)
            .then(res => res.json())
            .then((res) => {
                this.setState({ igImg: res.data[0].media_url})
            })
            .catch(console.log)
         */
    }

    render() {
        return(
            <HashRouter>
            <div className="mainContainer">
                <MyHeader />
                <div id="contentBox">
                    <Route path="/bio" component={ Bio }/>
                    <Route path="/downloads" component={ Downloads }/>
                    <Route path="/archive" render={ (props) => <SimpleSlider {...props} isAuthed={true} dbImgs={this.state.dbImgs} key={this.state.dbImgs} />} />
                </div>
                <Route exact path="/" render={ (props) => <InstagramDisplay {...props} igImg={this.state.igImg} /> }/>
            </div>
            </HashRouter>
        );
    }
}

export default Main;

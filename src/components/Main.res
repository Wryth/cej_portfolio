%%raw(`
// import React from 'react';
import {
    Route,
    HashRouter
  } from "react-router-dom";
import './Main.css';
import MyHeader from './MyHeader.jsx';
import Bio from './Bio';
import InstagramDisplay from './InstagramDisplay.jsx';
// import {make as Downloads} from "./Downloads.bs";
import SimpleSlider from "./SimpleSlider";
import Dropbox from "dropbox";
`)

let fetch_home_pic = () => {
    %raw(`
    new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN }).filesListFolder({path: '/home'})
        .then((res) => {
            return res.entries.map(x => x.path_lower)
        })
        .then((res) => {
                return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN }).filesGetTemporaryLink({ path: res[0] })
                    .then((result) => {
                        return result.link
                    })
                    .catch((error) => {
                        console.error(error);
                        return 'https://www.instagram.com/p/B2OYGi-BfVG/media/?size=l'
                    });
            }
        )
        .catch((error) => {
            console.error(error);
        })
    `)
}
let importAll = (r) => {
    r->Js_dict.keys
}

// @react.component
// let make = (_) => {
//     let (home, setHome) = React.useState(_ => "")
// 
// //     React.useEffect0(() => {
// //         setHome(prev => prev)
// //         //None // or Some(() => {})
// //     })
//     <div></div>
// }

@react.component
let make = () => {

//     let (darkmode, setDarkmode) = React.useState(_ => false)
    let url = RescriptReactRouter.useUrl()
    let (homepic, setHomePic) = React.useState(_ => "")
    let pdf = ""

    // from a previous example above
//     React.useEffect1(() => {
//         Js.log(`You clicked times! ${homepic}`)
//         None
//     }, [darkmode]);

    React.useEffect0(() => {
        Js.log(`You clicked times! ${homepic}`)
        fetch_home_pic() -> setHomePic
        None
    });

//    let color = switch darkmode {
//    | true => "theme-dark"
//    | false => "theme-light"
//    }

//     let onClick = evt => {
//         ReactEvent.Mouse.preventDefault(evt)
//         setDarkmode(prev => !prev)
//     }

//     let toggleText = "Switch to " ++ ((darkmode ? "light" : "dark") ++ " theme")

//     <div className=color>
//         <h1> {React.string("More Infos about ReScript")} </h1>
//         <div> <button onClick> {React.string(toggleText)} </button> </div>
//     </div>


    <div className="mainContainer">
        %raw(`<MyHeader />`)
        <div id="contentBox">
        { switch url.path {
            | list{""} => %raw(`<InstagramDisplay />`)
            | list{"archive"} => %raw(`<SimpleSlider />`)
            | list{"downloads"} => <Downloads pdf />
            | list{"bio"} => %raw(`<Bio />`)
            | _ => %raw(`<InstagramDisplay />`)
        }
        }
//            <Route path="/bio" component={ Bio }/>
//            <Route path="/downloads" render={ (props) => <Downloads {...props} isAuthed={true} pdf={this.state.pdf} key={this.state.pdf} />} />
//            <Route path="/archive" render={ (props) => <SimpleSlider {...props} isAuthed={true} dbImgs={this.state.dbImgs} key={this.state.dbImgs} />} />
        </div>
//        <Route exact path="/" render={ (props) => <InstagramDisplay {...props} isAuthed={true} igImg={this.state.igImg} key={this.state.igImg}/> }/>
    </div>
}




%%raw(`
// function importAll(r) {
//     return r.keys().map(r);
// }

// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dbImgs: [],
//             igImg: '',
//             pdf: '',
//         };
//     }
// 
//     componentDidMount() {
//         const dbx = new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN });
//         // get front Page Picture
//         dbx.filesListFolder({path: '/home'})
//             .then((res) => {
//                 return res.entries.map(x => x.path_lower)
//             })
//             .then((res) => {
//                     dbx.filesGetTemporaryLink({ path: res[0] })
//                         .then((result) => {
//                             this.setState({ igImg: result.link });
//                         })
//                         .catch((error) => {
//                             console.error(error);
//                             this.setState( { igImg: 'https://www.instagram.com/p/B2OYGi-BfVG/media/?size=l' })
//                         });
//                 }
//             )
//             .catch((error) => {
//                 console.error(error);
//             });
// 
//         dbx.filesListFolder({path: '/slider'})
//             .then((res) => {
//                 return res.entries.map(x => x.path_lower).sort().reverse()
//             })
//             .then((res) => {
//                 Promise.all(res.map(x => dbx.filesGetTemporaryLink({ path: x })))
//                     .then((result) => {
//                         this.setState({ dbImgs: result });
//                     })
//                     .catch((error) => {
//                         const pubimages = importAll(require.context('../../public/foto/carousel', false, /\.(png|jpe?g|svg)$/));
//                         const list2 = pubimages.map(x => x.split("/")[3].split(".")[0]);
//                         this.setState({ dbImgs: list2 });
//                         console.error(error);
//                     });
//                 }
//             )
//             .catch((error) => {
//                 console.error(error);
//             });
// 
//         // get PDF
//         dbx.filesListFolder({path: '/pdf'})
//             .then((res) => {
//                 return res.entries.map(x => x.path_lower)
//             })
//             .then((res) => {
//                 dbx.filesGetTemporaryLink({ path: res[0] })
//                     .then((result) => {
//                         this.setState({ pdf: result.link });
//                     })
//                     .catch((error) => {
//                         this.setState({ pdf: process.env.PUBLIC_URL + "/CEJ_works19.pdf" });
//                         console.error(error);
//                     });
//                 }
//             )
//             .catch((error) => {
//                 console.error(error);
//             });
// 
//         // TODO access the instagram feed. Should not have to et usre access token
//         /*
//         fetch('https://api.instagram.com/oauth/authorize?app_id='
//             + process.env.REACT_APP_IG_APP_ID + '&redirect_uri=https%3A%2F%2Fcarlemiljacobsen.com%2F&scope=&response_type=code')
//             .then((result) =>{
//                 console.log(result);
//             })
//             .catch();
// 
//         // GET most recent image added to instagram
//         fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=' + process.env.REACT_APP_IG_TOKEN)
//             .then(res => res.json())
//             .then((res) => {
//                 this.setState({ igImg: res.data[0].media_url})
//             })
//             .catch(console.log)
//         */
//     }
// 
//     render() {
//         return(
//              <HashRouter>
//              <div className="mainContainer">
//                  <MyHeader />
//                  <div id="contentBox">
//                      <Route path="/bio" component={ Bio }/>
//                      <Route path="/downloads" render={ (props) => <Downloads {...props} isAuthed={true} pdf={this.state.pdf} key={this.state.pdf} />} />
//                      <Route path="/archive" render={ (props) => <SimpleSlider {...props} isAuthed={true} dbImgs={this.state.dbImgs} key={this.state.dbImgs} />} />
//                  </div>
//                  <Route exact path="/" render={ (props) => <InstagramDisplay {...props} isAuthed={true} igImg={this.state.igImg} key={this.state.igImg}/> }/>
//              </div>
//              </HashRouter>
//         );
//     }
// }
// 
// export default Main;

`)

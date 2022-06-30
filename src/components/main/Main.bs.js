// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as $$Promise from "@ryyppy/rescript-promise/src/Promise.bs.js";
import * as Dropbox from "dropbox";
import * as Downloads from "../downloads/Downloads.bs.js";
import * as Caml_array from "rescript/lib/es6/caml_array.js";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.bs.js";

// import React from 'react';
// import {
//     Route,
//     HashRouter
//   } from "react-router-dom";
import './Main.css';
import MyHeader from '../header/MyHeader.jsx';
import Bio from '../bio/Bio';
import InstagramDisplay from '../InstagramDisplay.jsx';
// import {make as Downloads} from "../Downloads.bs";
import SimpleSlider from "../slider/SimpleSlider";
// import Dropbox from "dropbox";
;

var DDropbox = {};

function ff(param) {
  var a_fetch = function (prim) {
    return fetch(prim);
  };
  var a = {
    fetch: a_fetch,
    access_token: ""
  };
  var b = new Dropbox.Dropbox(a);
  b.filesListFolder({
        path: ""
      });
  return process.env.REACT_APP_DBX_TOKEN;
}

function handle_error(error) {
  if (error.RE_EXN_ID === $$Promise.JsError) {
    var msg = error._1.message;
    if (msg !== undefined) {
      console.log("Some JS error msg: " + msg);
    } else {
      console.log("Must be some non-error value");
    }
    return ;
  }
  console.log("Some unknown error");
  
}

function fetch_slider_pics(param) {
  return (new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN }).filesListFolder({path: '/slider'})
             .then((res) => {
                 return res.entries.map(x => x.path_lower).sort().reverse()
             })
             .then((res) => {
                 Promise.all(res.map(x => new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
                 .filesGetTemporaryLink({ path: x })))
                     .then((result) => {
                        // this.setState({ dbImgs: result });
                        return result
                     })
                     .catch((error) => {
                         const pubimages = importAll(require.context('../../../public/foto/carousel', false, /\.(png|jpe?g|svg)$/));
                         const list2 = pubimages.map(x => x.split("/")[3].split(".")[0]);
                         // this.setState({ dbImgs: list2 });
                         console.error(error);
                         return list2
                     });
                 }
             )
             .catch((error) => {
                 console.error(error);
             }));
}

function fetch_home_pic2(param) {
  return $$Promise.$$catch(new Dropbox.Dropbox({
                        fetch: (function (prim) {
                            return fetch(prim);
                          }),
                        access_token: process.env.REACT_APP_DBX_TOKEN
                      }).filesListFolder({
                      path: "/home"
                    }).then(function (res) {
                    return res.entries.map(function (x) {
                                return x.path_lower;
                              });
                  }).then(function (res) {
                  return $$Promise.$$catch(new Dropbox.Dropbox({
                                      fetch: (function (prim) {
                                          return fetch(prim);
                                        }),
                                      access_token: process.env.REACT_APP_DBX_TOKEN
                                    }).filesGetTemporaryLink({
                                    path: Caml_array.get(res, 0)
                                  }).then(function (res2) {
                                  return res2.link;
                                }), (function (error) {
                                handle_error(error);
                                return Promise.resolve("https://www.instagram.com/p/B2OYGi-BfVG/media/?size=l");
                              }));
                }), (function (e) {
                handle_error(e);
                return Promise.resolve("");
              }));
}

function fetch_home_pic(param) {
  return (new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN }).filesListFolder({path: '/home'})
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
        }));
}

function importAll(r) {
  return Object.keys(r);
}

function Main$Main(Props) {
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var match = React.useState(function () {
        return "";
      });
  var setHomePic = match[1];
  var homepic = match[0];
  var match$1 = React.useState(function () {
        return [];
      });
  var setdbImgs = match$1[1];
  var dbImgs = match$1[0];
  React.useEffect((function () {
          console.log("You clicked times! " + homepic);
          fetch_home_pic2(undefined).then(function (x) {
                console.log(x);
                return Curry._1(setHomePic, (function (param) {
                              return x;
                            }));
              });
          console.log("A " + dbImgs.toString());
          $$Promise.$$catch(fetch_slider_pics(undefined).then(function (value) {
                    console.log(value);
                    return Curry._1(setdbImgs, (function (prev) {
                                  return prev;
                                }));
                  }), (function (e) {
                  handle_error(e);
                  return Promise.resolve(undefined);
                }));
          
        }), []);
  var match$2 = url.path;
  var tmp;
  var exit = 0;
  if (match$2) {
    switch (match$2.hd) {
      case "" :
          if (match$2.tl) {
            exit = 1;
          } else {
            tmp = (<InstagramDisplay igImg={homepic} key={homepic} />);
          }
          break;
      case "archive" :
          if (match$2.tl) {
            exit = 1;
          } else {
            tmp = (<SimpleSlider dbImgs={dbImgs} />);
          }
          break;
      case "bio" :
          if (match$2.tl) {
            exit = 1;
          } else {
            tmp = (<Bio />);
          }
          break;
      case "downloads" :
          if (match$2.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(Downloads.Downloads.make, {
                  pdf: ""
                });
          }
          break;
      default:
        exit = 1;
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    tmp = (<InstagramDisplay igImg={homepic} key={homepic} />);
  }
  return React.createElement("div", {
              className: "mainContainer"
            }, (<MyHeader />), React.createElement("div", {
                  id: "contentBox"
                }, tmp));
}

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

var Main = {
  make: Main$Main
};

export {
  DDropbox ,
  ff ,
  handle_error ,
  fetch_slider_pics ,
  fetch_home_pic2 ,
  fetch_home_pic ,
  importAll ,
  Main ,
  
}
/*  Not a pure module */

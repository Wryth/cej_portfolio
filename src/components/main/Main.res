%%raw(`
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
`)

    // Module contents
module DDropbox = {
    type responseType = BASIC | CORS | DEFAULT | ERROR | OPAQUE | OPAQUEREDIRECT

    type response = {
        ok: bool,
        redirected: bool,
        status: int,
        statusText: string,
        \"type": responseType,
        url: string,
    }
    // Fetch.Fetch.withRequest()

    // @val external fetch: (string) => Promise.t<Fetch.Response.t> = "fetch"
    // @val external fetch: (Fetch.Request.t) => Promise.t<Fetch.Response.t> = "fetch"

    type requestInit = {
        integrity: string,
        keepalive: bool,
        method: string,
        referrer: string,
    }

    type url = {
        hash: string,
        host: string,
        hostname: string,
        href: string,
        origin: string,
        password: string,
        pathname: string,
        port: string,
        protocol: string,
        search: string,
        username: string,
    }

    type dropboxOptions = { 
        fetch: (Fetch.Request.t) => Promise.t<Fetch.Response.t>, 
        access_token: string 
    }

    type dropbox

    @module("dropbox") @new external dropbox: (dropboxOptions) => dropbox = "Dropbox"

    type files
    type pathROrId = string
    type listFolderArg = {
      path: pathROrId,
    }

    type metadata = {
      name: string,
      path_lower: string,
      path_display: string
    }

    type listFolderResult = {
      entries: array<metadata>,
      has_more: bool
    }

    type getTemporaryLinkResult = {
      metadata: metadata,
      link: string
    }

    @send external filesListFolder: (dropbox, listFolderArg) => Promise.t<listFolderResult> = "filesListFolder"
    @send external filesGetTemporaryLink: (dropbox, listFolderArg) => Promise.t<getTemporaryLinkResult> = "filesGetTemporaryLink"
}

// @val @scope(("process", "env")) @return(nullable) external react_app_dbx_token: option<string> = "REACT_APP_DBX_TOKEN"
@val @scope(("process", "env")) external react_app_dbx_token: string = "REACT_APP_DBX_TOKEN"

// let ff = () => {
//     open DDropbox
//     
//     // open Fetch
//     let ee = Js.Dict.empty()
//     let oo = Js.Dict.set(ee, "Access-Control-Allow-Origin", "*")
//     let o = Js.Option.map((. x) => {
//             Js.Dict.set(x, "Access-Control-Allow-Origin", "*")
//             x
//         }, Fetch.Options.default.headers)
// 
// 
//     let f = (x) => Fetch.Request.Make.WithOptions.fromRequest(x, Fetch.Options.default)
// 
//     let a = {fetch: f, access_token: react_app_dbx_token}
//     let b = dropbox(a)
//     let c = {path: ""}
//     b -> filesListFolder(c)
// 
//     // DDropbox.filesListFolder("/slider")
// }

let handle_error = (error) => {
    switch error {
    | Promise.JsError(obj) =>
        switch Js.Exn.message(obj) {
        | Some(msg) => Js.log("Some JS error msg: " ++ msg)
        | None => Js.log("Must be some non-error value")
        }
    | _ => Js.log("Some unknown error")
    }
}

let fetch_slider_pics = () => {
    %raw(`
    new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN }).filesListFolder({path: '/slider'})
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
             })
    `)
}

let fetch_home_pic2 = () => {
        

    DDropbox.dropbox({fetch: Fetch.Fetch.withRequest, access_token: react_app_dbx_token})
        -> DDropbox.filesListFolder({path: "/home"}) 
        -> Promise.thenResolve(res => res.entries -> Js.Array2.map(x => x.path_lower)) 
        -> Promise.then(res => {
            DDropbox.dropbox({fetch: Fetch.Fetch.withRequest, access_token: react_app_dbx_token})
                -> DDropbox.filesGetTemporaryLink({ path: res[0] })
                -> Promise.thenResolve(res2 => res2.link)
                -> Promise.catch(error => {
                    handle_error(error)
                    Promise.resolve("https://www.instagram.com/p/B2OYGi-BfVG/media/?size=l")
                })
    })
    -> Promise.catch(e => {
        handle_error(e)
        Promise.reject(e)
    })
}

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

let importAll = (r) => Js_dict.keys(r)

module Main = {
    @react.component
    let make = () => {
        let url = RescriptReactRouter.useUrl()
        let (homepic, setHomePic) = React.useState(_ => "")
        let (dbImgs, setdbImgs) = React.useState(_ => [])
        let pdf = ""

        React.useEffect0(() => {
            Js.log(`You clicked times! ${homepic}`)
            fetch_home_pic2()
                -> Promise.thenResolve(x => {
                    Js.log(x)
                    setHomePic(_ => x)
                })
                -> ignore

            Js.log(`A ${dbImgs -> Js.Array.toString}`)
            fetch_slider_pics()
                -> Promise.thenResolve(value => {
                    Js.log(value)
                    setdbImgs(prev => prev)
                })
                -> Promise.catch(e => {
                    handle_error(e)
                    Promise.resolve()
                })
                -> ignore
            None
        });

    open Downloads
    <div className="mainContainer">
        %raw(`<MyHeader />`)
        <div id="contentBox">
        { switch url.path {
            | list{""} => %raw(`<InstagramDisplay igImg={homepic} key={homepic} />`)
            | list{"archive"} => %raw(`<SimpleSlider dbImgs={dbImgs} />`)
            | list{"bio"} => %raw(`<Bio />`)
            | list{"downloads"} => <Downloads pdf />
            | _ => %raw(`<InstagramDisplay igImg={homepic} key={homepic} />`)
        }
        }
//            <Route path="/bio" component={ Bio }/>
//            <Route path="/downloads" render={ (props) => <Downloads {...props} isAuthed={true} pdf={this.state.pdf} key={this.state.pdf} />} />
//            <Route path="/archive" render={ (props) => <SimpleSlider {...props} isAuthed={true} dbImgs={this.state.dbImgs} key={this.state.dbImgs} />} />
        </div>
//        <Route exact path="/" render={ (props) => <InstagramDisplay {...props} isAuthed={true} igImg={this.state.igImg} key={this.state.igImg}/> }/>
    </div>

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

//    let a = %raw(`
//    (dbImgs, keys) => {
//        return (<SimpleSlider dbImgs={dbImgs} keys={keys} />)
//        }`)
//
//    let b = %raw(`
//        (pic) => {return (<InstagramDisplay igImg={homepic}/>)}
//    `)
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
}
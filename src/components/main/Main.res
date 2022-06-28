%%raw(`
// import React from 'react';
// import {
//     Route,
//     HashRouter
//   } from "react-router-dom";
import './Main.css';
import MyHeader from '../MyHeader.jsx';
import Bio from '../Bio';
import InstagramDisplay from '../InstagramDisplay.jsx';
// import {make as Downloads} from "../Downloads.bs";
import SimpleSlider from "../SimpleSlider";
// import Dropbox from "dropbox";
`)



module DDropbox = {
    type dropboxOptions = { 
        fetch: () => string, 
        access_token: string 
    }


    type dropbox

    @module("dropbox") @new 
    external dropbox: (dropboxOptions) => dropbox = "Dropbox"

    type files

    type listFolderArg = {
      /**
       * A unique identifier for the file.
       */
      path: string
    }

    type metadata = {
      /**
       * The last component of the path (including extension). This never
       * contains a slash.
       */
      name: string,
      /**
       * The lowercased full path in the user's Dropbox. This always starts with
       * a slash. This field will be null if the file or folder is not mounted.
       */
      path_lower: string,
      /**
       * The cased path to be used for display purposes only. In rare instances
       * the casing will not correctly match the user's filesystem, but this
       * behavior will match the path provided in the Core API v1, and at least
       * the last path component will have the correct casing. Changes to only
       * the casing of paths won't be returned by listFolderContinue(). This
       * field will be null if the file or folder is not mounted.
       */
      path_display: string
      /**
       * Please use FileSharingInfo.parent_shared_folder_id or
       * FolderSharingInfo.parent_shared_folder_id instead.
       */
      // parent_shared_folder_id?: common.SharedFolderId;
    }

    type listFolderResult = {
      /**
       * The files and (direct) subfolders in the folder.
       */
      entries: array<metadata>,
      /**
       * Pass the cursor into listFolderContinue() to see what's changed in the
       * folder since your previous query.
       */
      // cursor: ListFolderCursor;
      /**
       * If true, then there are more entries available. Pass the cursor to
       * listFolderContinue() to retrieve the rest.
       */
      has_more: bool
    }

    @send 
    external filesListFolder: (dropbox, listFolderArg) => Promise.t<listFolderResult> = "filesListFolder"


    // public filesListFolder(arg: files.ListFolderArg): Promise<files.ListFolderResult>;
//    @module("dropbox") external filesListFolder: (dropbox, string) => Promise.t<string> = "filesListFolder"
}

let ff = () => {
    open DDropbox
    let a = {fetch: () => "", access_token: ""}
    let b = dropbox(a)

    let c = {path: ""}
    
    let d = b -> filesListFolder(c)

    

    // DDropbox.filesListFolder("/slider")
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
    r -> Js_dict.keys
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

    let url = RescriptReactRouter.useUrl()
    let (homepic, setHomePic) = React.useState(_ => "")
    let (dbImgs, setdbImgs) = React.useState(_ => [])
    let pdf = ""

    React.useEffect0(() => {
        open Js_promise
        // open Promise

        Js.log(`You clicked times! ${homepic}`)
        let fetch_home = fetch_home_pic()
            -> then_(value => {
                Js.log(value)
                setHomePic(_ => value)
                resolve(value)
            }, _)

        Js.log(`Some ${dbImgs -> Js.Array.toString}`)
        let fetch_slider = fetch_slider_pics()
            -> then_(value => {
                Js.log(value)
                setdbImgs(prev => prev)
                Promise.resolve(value)
            }, _)
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

//    let a = %raw(`
//    (dbImgs, keys) => {
//        return (<SimpleSlider dbImgs={dbImgs} keys={keys} />)
//        }`)
//
//    let b = %raw(`
//        (pic) => {return (<InstagramDisplay igImg={homepic}/>)}
//    `)

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

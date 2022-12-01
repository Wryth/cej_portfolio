%%raw(`
import './Main.css';
import MyHeader from '../header/MyHeader.jsx';
import Bio from '../bio/Bio';
import InstagramDisplay from '../instagram/InstagramDisplay.jsx';
import SimpleSlider from "../slider/SimpleSlider";
import { fetch_slider_pics2, fetch_home_pic2 } from "./fetchDropBoxFiles";
`)

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

type metadata = {
    client_modified: string,
    content_hash: string, 
    id: string,
    is_downloadable: bool,
    name: string,
    path_display: string,
    path_lower: string,
    rev: string,
    server_modified: string,
    size: int
}

type imgData = {
    link: string,
    metadata: metadata 
}

let fetch_slider_pics = () => %raw(`fetch_slider_pics2()`)
let fetch_home_pic = () => %raw(`fetch_home_pic2()`)

module Main = {
    open Downloads

    @react.component
    let make = () => {
        let url = RescriptReactRouter.useUrl()
        let (homepic, setHomePic) = React.useState(_ => "")
        let (dbImgs, setdbImgs) = React.useState(_ => [])
        let pdf = ""

        React.useEffect0(() => {

            Js.log(`${homepic}`)
            fetch_home_pic()
                -> Promise.thenResolve(x => {
                    setHomePic(_ => x)
                })
                -> ignore

            Js.log(`${Js.Array.toString(dbImgs)}`)
            fetch_slider_pics()
                -> Promise.thenResolve(x => {
                    setdbImgs(_ => x)
                })
                -> Promise.catch(e => {
                    handle_error(e)
                    Promise.resolve()
                })
                -> ignore
            None
        });

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
        </div>
    </div>
    }
}
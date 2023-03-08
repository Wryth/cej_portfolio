%%raw(`
import './Main.css';
import MyHeader from '../header/MyHeader.jsx';
import Bio from '../bio/Bio';
import InstagramDisplay from '../instagram/InstagramDisplay.jsx';
import SimpleSlider from "../slider/SimpleSlider";
import { fetch_slider_pics2, fetch_home_pic2, fetch_cv_file2 } from "./fetchDropBoxFiles";
`)


let fetch_slider_pics = async (setSilderPics) => {
    let slier_pics = await %raw(`fetch_slider_pics2()`)
    setSilderPics(_ => slier_pics)
} 

let fetch_home_pic = async (setHomePic) => {
    let pic = await %raw(`fetch_home_pic2()`)
    setHomePic(_ => pic)
}

let fetch_cv_file = async (setCvFile) => {
    let cvFile = await %raw(`fetch_cv_file2()`)
    setCvFile(cvFile)
}

module Main = {
    open Downloads

    @react.component
    let make = () => {
        open React
        let url = RescriptReactRouter.useUrl()
        let (homepic, setHomePic) = useState(_ => "")
        let (dbImgs, setdbImgs) = useState(_ => [])
        let pdf = ""
        let (cv, setCv) = useState(_ => "")

        useEffect0(() => {

            Js.log(`${homepic}`)
            fetch_home_pic(setHomePic) -> ignore

            Js.log(`${Js.Array.toString(dbImgs)}`)
            fetch_slider_pics(setdbImgs) -> ignore

            fetch_cv_file(setCv) -> ignore

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

//let handle_error = (error) => {
//    switch error {
//    | Promise.JsError(obj) =>
//        switch Js.Exn.message(obj) {
//        | Some(msg) => Js.log("Some JS error msg: " ++ msg)
//        | None => Js.log("Must be some non-error value")
//        }
//    | _ => Js.log("Some unknown error")
//    }
//}

//type metadata = {
//    client_modified: string,
//    content_hash: string, 
//    id: string,
//    is_downloadable: bool,
//    name: string,
//    path_display: string,
//    path_lower: string,
//    rev: string,
//    server_modified: string,
//    size: int
//}
//
//type imgData = {
//    link: string,
//    metadata: metadata 
//}
}
%%raw(`
import './Main.css';
import MyHeader from '../header/MyHeader.jsx';
// import Bio from '../bio/Bio';
import InstagramDisplay from '../instagram/InstagramDisplay.jsx';
import SimpleSlider from "../slider/SimpleSlider";
import { fetch_slider_pics2, fetch_home_pic2, fetch_cv_file2 } from "./fetchDropBoxFiles";
`)

open Downloads
open Bio

let fetch_slider_pics = async (setSilderPics) => {
    let slider_pics = await %raw(`fetch_slider_pics2()`)
    setSilderPics(_ => slider_pics)
} 

let fetch_home_pic = async (setHomePic) => {
    let pic = await %raw(`fetch_home_pic2()`)
    setHomePic(_ => pic)
}

// type exhibitionData = {
// 	year: string,
// 	title: string,
// 	description: string,
// 	location: string,
// 	city: string,
// 	country: string
// }

// bind to JS' JSON.parse
@scope("JSON") @val
external parseIntoMyData: string => array<exhibitionData> = "parse"


let fetch_cv_file = async (setCvFile) => {
    let cvFile = await %raw(`fetch_cv_file2()`)

    let a = Js.Json.stringifyAny(cvFile)
    let b = switch a {
        | Some(x) => x
        | None => failwith("Failed to fetch json")
        }

    let result = parseIntoMyData(b)
    setCvFile(_ => result)
}

module Main = {
    open React

    @react.component
    let make = () => {
        let init = [{ year: "", title: "", description: "", location: "", city: "", country: ""}]

        let url = RescriptReactRouter.useUrl()
        let (homepic, setHomePic) = useState(_ => "")
        let (dbImgs, setdbImgs) = useState(_ => [])
        let (cv, setCv) = useState(_ => init)
        let pdf = ""

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
            | list{"bio"} => <Bio cv/> // %raw(`<Bio cv={cv}/>`)
            | list{"downloads"} => <Downloads pdf />
            | _ => %raw(`<InstagramDisplay igImg={homepic} key={homepic} />`)
        }
        }
        </div>
    </div>
    }
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
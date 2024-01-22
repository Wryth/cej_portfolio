%%raw(`
import './Main.css';
import SimpleSlider from "../slider/SimpleSlider";
import { fetch_slider_pics2, fetch_home_pic2, fetch_cv_file2, fetch_pdf_file2 } from "./fetchDropBoxFiles";
`)

open Downloads
open Bio
open Home
open MyHeader

let fetch_slider_pics = async setSilderPics => {
  let slider_pics = await %raw(`fetch_slider_pics2()`)
  setSilderPics(_ => slider_pics)
}

let fetch_home_pic = async setHomePic => {
  let pic = await %raw(`fetch_home_pic2()`)
  setHomePic(_ => pic)
}

let fetch_pdf_file = setPdfFile => {
  let pdfFile = %raw(`fetch_pdf_file2()`)
  setPdfFile(_ => pdfFile)
}

// bind to JS' JSON.parse
@scope("JSON") @val
external parseIntoMyData: string => array<exhibitionData> = "parse"

let fetch_cv_file = async setCvFile => {
  let cvFile = await %raw(`fetch_cv_file2()`)

  let jsonFile = Js.Json.stringifyAny(cvFile)
  let json = switch jsonFile {
  | Some(x) => x
  | None => failwith("Failed to fetch json")
  }

  let result = parseIntoMyData(json)
  setCvFile(_ => result)
}

module Main = {
  open React

  @react.component
  let make = () => {
    let init = [{year: "", title: "", description: "", location: "", city: "", country: ""}]

    let url = RescriptReactRouter.useUrl()
    let (homepic, setHomePic) = useState(_ => "")
    let (dbImgs, setdbImgs) = useState(_ => [])
    let (cv, setCv) = useState(_ => init)
    let (pdf, setPdfFile) = useState(_ => "")

    useEffect0(() => {
      Js.log(`${homepic}`)
      fetch_home_pic(setHomePic)->ignore
      Js.log(`${Js.Array.toString(dbImgs)}`)
      fetch_slider_pics(setdbImgs)->ignore
      fetch_cv_file(setCv)->ignore
      fetch_pdf_file(setPdfFile)->ignore

      None
    })

    let content = switch url.path {
    | list{""} => <Home igImg={homepic} key={homepic} />
    | list{"archive"} => %raw(`<SimpleSlider dbImgs={dbImgs} />`)
    | list{"bio"} => <Bio cv />
    | list{"downloads"} => <Downloads pdf />
    | _ => <Home igImg={homepic} key={homepic} />
    }

    <div className="mainContainer">
      <MyHeader />
      <div id="contentBox" className=""> {content} </div>
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

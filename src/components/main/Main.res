%%raw(`
import './Main.css';
import SimpleSlider from "../slider/SimpleSlider";
import { fetch_slider_pics_js, fetch_home_pic_js, fetch_cv_file_js, fetch_pdf_file_js } from "./fetchDropBoxFiles";
`)

open Downloads
open Bio
open Home
open MyHeader

let fetch_slider_pics = async setSilderPics => {
  let slider_pics = await %raw(`fetch_slider_pics_js()`)
  setSilderPics(_ => slider_pics)
}

let fetch_home_pic = async setHomePic => {
  let pic = await %raw(`fetch_home_pic_js()`)
  setHomePic(_ => pic)
}

let fetch_pdf_file = async setPdfFile => {
  let pdfFile = await %raw(`fetch_pdf_file_js()`)
  setPdfFile(_ => pdfFile)
}

// bind to JS' JSON.parse
@scope("JSON") @val
external parseIntoMyData: string => array<exhibitionData> = "parse"

let fetch_cv_file = async setCvFile => {
  let cvFile = await %raw(`fetch_cv_file_js()`)

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
      {content}
    </div>
  }
}

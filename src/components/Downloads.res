%%raw("import './Downloads.css'")

@react.component
let make = (~pdf: string) => {
    <div id="dlContainer">
        <a className="pdfDL largeText" href=pdf download=pdf>{React.string("CEJ_works.pdf")}</a>
    </div>
}




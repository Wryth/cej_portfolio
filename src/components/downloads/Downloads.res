%%raw("import './Downloads.css'")

module Downloads = {

    @react.component
    let make = (~pdf: string) => {
        let pdfTitle = React.string("CEJ_works.pdf")
        
        <div id="dlContainer">
            <a className="pdfDL largeText" href=pdf download=pdf>
                pdfTitle
            </a>
        </div>
    }
}

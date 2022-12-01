%%raw(`
import "./CustomCursor.css";
`)

module CustomCursor = {
    @react.component
    let make = () => {
        <div className="cursorContainer">
            <div id="custom-cursor" />
        </div>
    }
}
%%raw(`
import "./App.css";

const handleCursor = (event) => {
	document.getElementById("custom-cursor")
		.setAttribute("style", "top: "+(event.pageY - 0)+"px; left: "
			+(event.pageX - 0)+"px;")
};

`)

// let handleC = (event: ReactEvent.Mouse.t): unit => {
// 
// 	// event->ReactEvent.Mouse.pageX

// let a = ReactDOM.querySelector("custom-cursor")
// let a = Dom.Storage.getItem("custom-cursor")
// 	Js.log(a)
// 
// }

module App = {
	@react.component
	let make = () => {
		open CustumCursor
		open Main

		<div className="appContainer" onMouseMove={%raw(`handleCursor`)}>
			<CustomCursor />
			<Main />
		</div>
	}
}
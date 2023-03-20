%%raw(`
import "./App.css";

const handleCursor = (event) => {
	document.getElementById("custom-cursor")
		.setAttribute("style", "top: "+(event.pageY - 0)+"px; left: "
			+(event.pageX - 0)+"px;")
};
`)

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
%%raw(`
import './InstagramDisplay.css';
`)

module Home = {
	@react.component
	let make = (~igImg) => {

		<div id="igContainer">
			<img id="igSource" src={igImg} alt="" />
		</div>
	}
}

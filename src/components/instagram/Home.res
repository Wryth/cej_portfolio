%%raw(`
import './Home.css';
`)

module Home = {
	@react.component
	let make = (~igImg) => {
		<div id="igContainer">
			<img id="igSource" src={igImg} alt="home_image"/>
		</div>
	}
}

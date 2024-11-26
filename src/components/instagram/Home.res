%%raw(`
import './Home.css';
`)

module Home = {
	@react.component
	let make = (~igImg) => {
		<div id="igContainer">
			<img id="igSource .fade-in" src={igImg} alt="home_image" className={loading ? "fade-in" : ""} />
		</div>
	}
}

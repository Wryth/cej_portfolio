%%raw(`
import './Home.css';
`)

module Home = {
	@react.component
	let make = (~igImg) => {
		let (isLoading, setIsLoading) = React.useState(_ => true)

		React.useEffect0(() => {
			let _ = Js.Global.setTimeout(() => {
				setIsLoading(_ => false)
			}, 2000)
			None
		})

		<div id="igContainer">
			<img
				id="igSource"
				className={isLoading ? "basket hide" : "basket"}
				src={igImg}
				alt="home_image"
			/>
		</div>
	}
}

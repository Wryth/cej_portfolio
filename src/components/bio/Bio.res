%%raw(`
import './Bio.css';
`)

open React

type exhibitionData = {
	year: string,
	title: string,
	description: string,
	location: string,
	city: string,
	country: string
}

module Exhibition = {
	@react.component
	let make = (~data) => {
		let location = data.location != "" ? ", " ++ data.location : ""
		let city = data.city != "" ? ", " ++ data.city : ""
		let country = data.country != "" ? ", " ++ data.country : ""
		let place = string(location ++ city ++ country)

		<div>
			<div className="bioYear largeText">
				{string(data.year)}
			</div>
			<p className="exhibitionInfo smallText">
				{string(data.title)}{string(", ")}<i>{string(data.description)}</i> place
				<br></br>
			</p>
		</div>
	}
}

module CV = {
	@react.component
	let make = (~cv: array<exhibitionData>) => {
		// TODO: filter years
		let years = cv->Js.Array2.map(x => x.year)

		let result = cv
			->Js.Array2.map(x => {<Exhibition data=x />})
			->React.array

		<div>
			result
			<br></br>
			<br></br>
		</div>
	}
}


module Bio = {
// TODO:
// %%raw(`
// 	const onXclick = () => {
// 		document.getElementById('headerMenu').scrollIntoView();
// 	};
// `)
	@react.component
	let make = (~cv: array<exhibitionData>) => {
		Js.log(cv[0])

		<div id="bioContainer" >
			<div>
				<div className="bioHeader largeText">
					{string("BIO")}
				</div>
				<p className="bioText largeText">
					{string("Since Danish sculptor Carl Emil Jacobsen (b. 1987) graduated from Kolding School of Design in 2012, his practice has oscillated between art and design, revol&shy;ving around existentialism, ritualistic sophisti&shy;cation and solid craftsmanship.")}
				</p>
				<p className="bioText largeText">
					{string("Working with found materials such as stones from the heath, bricks from demolished buildings, chalk&shy;stone and marble, Carl Emil Jacobsen trans&shy;forms massive stones into light, thin and crisp shells of fine colour. As an ode to the richness of natural colours in the Nordic landscape, he brings new life to the powdered stone by converting it into layers of poetic coloured pigment — in bright to burnt hues — and a sculptural element in itself. His iron sculp&shy;tures, some polished, some burnt,  are created intuitively out of welding work without preliminary studies resulting in fragmented pieces hammered together to instinctive forms.")}
				</p>
				<p className="bioText largeText">
					{string("Inspired by the dictum of late Danish sculptor Willy Ørskov's theory that \"the content of the sculpture  is sculpture\", his nonfigurative sculp&shy;tures exist  on their own terms as abstract, physical forms fostering experiential connection over intellectual interference in the elastic borderland between nature and culture.")}
				</p>
				<p className="bioText textEnd largeText">
					{string("Carl Emil Jacobsen is represented by Galerie Maria Wettergren in Paris and has been exhibited at Art Basel, PAD, Clay Museum of Ceramic Art Denmark, Mindcraft Exhibition in Milan, Patrick Parrish Gallery, Chamber Gallery, Kunsthal Charlottenborg, Piscine and elsewhere.")}
				</p>
			</div>

			<div>
				<div className="bioHeader largeText">
					<p className="bioHeader largeText">
						{string("SELECTED")}
						<br></br>
						{string("EXHIBITIONS")}
					</p>
				</div>

				{<CV cv />}

				<div
					className="xEnd largeText"
					//onClick={onXclick}
				>
					{string("X")}
				</div>
			</div>
		</div>
	}
}

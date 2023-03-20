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

		<>
			<p className="exhibitionInfo smallText">
				{string(data.title)}{string(", ")}<i>{string(data.description)}</i> place
				<br></br>
			</p>
		</>
	}
}

module YearGroup = {
	@react.component
	let make = (~data:(string, array<exhibitionData>)) => {
		let (a, b) = data

		let result = b
			->Js.Array2.map(data => {<Exhibition data />})
			->React.array
		<>
			<div className="bioYear largeText">
				{string(a)}
			</div>
			result
			<br></br>
			<br></br>
		</>
	}
}

module CV = {
	@react.component
	let make = (~cv: array<exhibitionData>) => {
		open Js.Array2

		let groupByYear = (v1, v2) => {
 			switch v1->Js.Dict.keys->includes(v2.year) {
 			| true => v1->Js.Dict.set(v2.year, v1->Js.Dict.unsafeGet(v2.year)->concat([v2])); v1
 			| false => v1->Js.Dict.set(v2.year, [v2]); v1
 			}
		}
 		let yearGroups = cv->reduce(groupByYear, Js.Dict.empty())
		let result = Js.Dict.entries(yearGroups)
			->map(data => <YearGroup data />)
			->reverseInPlace
			->React.array

		<>
			result
			<br></br>
			<br></br>
		</>
	}
}


module Bio = {
	%%raw(`
		const onXclick = () => {
			document.getElementById('headerMenu').scrollIntoView();
		};
	`)

	@react.component
	let make = (~cv: array<exhibitionData>) => {
		let bioHeader = string("BIO")
		let bioText1 = string("Since Danish sculptor Carl Emil Jacobsen (b. 1987) graduated from Kolding School of Design in 2012, his practice has oscillated between art and design, revol&shy;ving around existentialism, ritualistic sophisti&shy;cation and solid craftsmanship.")
		let bioText2 = string("Working with found materials such as stones from the heath, bricks from demolished buildings, chalk&shy;stone and marble, Carl Emil Jacobsen trans&shy;forms massive stones into light, thin and crisp shells of fine colour. As an ode to the richness of natural colours in the Nordic landscape, he brings new life to the powdered stone by converting it into layers of poetic coloured pigment — in bright to burnt hues — and a sculptural element in itself. His iron sculp&shy;tures, some polished, some burnt,  are created intuitively out of welding work without preliminary studies resulting in fragmented pieces hammered together to instinctive forms.")
		let bioText4 = string("Carl Emil Jacobsen is represented by Galerie Maria Wettergren in Paris and has been exhibited at Art Basel, PAD, Clay Museum of Ceramic Art Denmark, Mindcraft Exhibition in Milan, Patrick Parrish Gallery, Chamber Gallery, Kunsthal Charlottenborg, Piscine and elsewhere.")

		<div id="bioContainer" >
			<>
				<div className="bioHeader largeText">
					bioHeader
				</div>
				<p className="bioText largeText">
					bioText1
				</p>
				<p className="bioText largeText">
				 	bioText2
				</p>
				<p className="bioText largeText">
					// bioText3
					{string("Inspired by the dictum of late Danish sculptor Willy Ørskov's theory that \"the content of the sculpture  is sculpture\", his nonfigurative sculp" ++ Js.String2.fromCharCode(U+00AD))}{string("tures exist  on their own terms as abstract, physical forms fostering experiential connection over intellectual interference in the elastic borderland between nature and culture.")}
				</p>
				<p className="bioText textEnd largeText">
					bioText4
				</p>
			</>

			<>
				<div className="bioHeader largeText">
					<p className="bioHeader largeText">
						{string("SELECTED")}
						<br></br>
						{string("EXHIBITIONS")}
					</p>
				</div>

				<CV cv />

				<div
					className="xEnd largeText"
					onClick={%raw(`onXclick`)}
				>
					{string("X")}
				</div>
			</>
		</div>
	}
}

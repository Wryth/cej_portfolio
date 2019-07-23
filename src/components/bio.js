import React from 'react';
import './bio.css';

class Bio extends React.Component{

    onXclick = () => {
        document.getElementById('headerMenu').scrollIntoView();        
    }

    render(){
        return(
        <div id="bioContainer" >
            <div>
                <div className="bioHeader largeText">
                    BIO
                    </div>
                <p className="bioText largeText">
                    Since Danish sculptor Carl Emil Jacobsen (b. 1987) graduated from Kolding School of Design in 2012, his practice has oscillated between art and design, revol&shy;ving around existentialism, ritualistic sophisti&shy;cation and solid craftsmanship.
                </p>
                <p className="bioText largeText">
                    Working with found materials such as marquee from the heath, bricks from demolished buildings, chalk&shy;stone and marble, Carl Emil Jacobsen trans&shy;forms massive stones into light, thin and crisp shells of fine colour. As an ode to the richness of natural colours in the Nordic landscape, he brings new life to the powdered stone by converting it into layers of poetic coloured pigment — in bright to burnt hues — and a sculptural element in itself. His iron sculp&shy;tures, some polished, some burnt,  are created intuitively out of welding work without preliminary studies resulting in fragmented pieces hammered together to instinctive forms.
                </p>
                <p className="bioText largeText">
                    Inspired by the dictum of late Danish sculptor Willy Ørskov's theory that "the content of the sculpture  is sculpture", his nonfigurative sculp&shy;tures exist  on their own terms as abstract, physical forms fostering experiential connection over intellectual interference in the elastic borderland between nature and culture.
                </p>
                <p className="bioText textEnd largeText">
                    Carl Emil Jacobsen is represented by Galerie Maria Wettergren in Paris and has been exhibited at Art Basel, PAD, Clay Museum of Ceramic Art Denmark, Mindcraft Exhibition in Milan, Patrick Parrish Gallery, Chamber Gallery, Kunsthal Charlottenborg, Piscine and elsewhere.
                </p>
            </div>

            <div>
                <div className="bioHeader largeText">
                    <p className="bioHeader largeText">
                        SELECTED
                        <br></br>
                        EXHIBITIONS
                    </p>
                </div>

                <div className="bioYear largeText">
                    2019 
                </div>
                <p className="exhibitionInfo smallText">
                    CERAMIC MOMENTUM, <i>group exhibition</i>, CLAY, Museum of Ceramic Art, DK
                    <br></br>
                    WEATHERED, <i>solo show</i>, Mark Kenly Domino Tan Showroom, København, DK
                    <br></br>
                    <br></br>
                </p>

                <div className="bioYear largeText">
                    2018
                </div>
                <div className="exhibitionInfo smallText">
                    DON’T KNOW WHAT SHAPE I’M IN, solo show, Patrick Parrish Gallery, NYC, US
                    <br></br>
                    ABOUT CLAY, <i>group exhibition</i>, Fiskars, FI
                    <br></br>
                    MINDCRAFT18, <i>group exhibition</i>, Il Salone, Milano, IT
                    <br></br>
                    <br></br>
                </div>

                <div className="bioYear largeText">
                    2017 
                </div>
                <div className="exhibitionInfo smallText">
                    NEW DANISH MODERN, <i>group exhibition</i>, O­space, Aarhus, DK
                    <br></br>
                    TERRAIN, <i>solo show</i>, Galerie Maria Wettergren, Paris, FR
                    <br></br>
                    MINDCRAFT17, <i>group exhibition</i>, Il Salone, Milano, IT
                    <br></br>
                    DOMESTIC APPEAL, PART III, <i>group exhibition</i>, Chamber Gallery New York, US
                    <br></br>
                    <br></br>
                </div>

                <div className="bioYear largeText">
                    2016
                </div>
                <div className="exhibitionInfo smallText">
                    THE CURIO, CHART ART FAIR, <i>group exhibition</i>, Charlottenborg, København, DK
                    <br></br>
                    FORÅRSUDSTILLINGEN, <i>group exhibition</i>, København, DK
                    <br></br>
                    <br></br> 
                </div>

                <div className="bioYear largeText">
                    2015
                </div>
                <div className="exhibitionInfo textEnd smallText">
                    TILSIGTEDE SAMMENSÆTNINGER (I UTILSIGTEDE OPTRÆDENER),
                    <br></br>
                    <i>solo show</i>, Piscine, Aarhus, DK
                </div>
                <div
                    className="xEnd largeText"
                    onClick={this.onXclick}
                >
                    X
                </div>
            </div>
        </div>
    )}
}

export default Bio;
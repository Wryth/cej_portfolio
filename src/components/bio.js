import React from 'react';
import './bio.css';

class Bio extends React.Component{

    render(){
        return(
        <div id="bioContainer">
            <div >
                <div className="bioHeader">BIO</div>
                <p id="bioText">Since Danish sculptor Carl Emil Jacobsen (b. 1987) graduated from Kolding School of Design in 2012, his practice has oscilated between art and design, revolving around existentialism, ritualistic sophistication and solid crafts manship. Working with found materials such as bricks from demolished buildings, he brings new life to powdered stone, conver ting it into layers of natural colored pigment. His nonfigurative sculptures stand on their own terms, fostering experiential connection over intellectual interference. Jacobsen’s works has been exhibited at The Curio - Chart Art Fair and The Spring Exhibition at Kunsthal Charlottenborg in Copenhagen, with Galerie Maria Wettergren, at Piscine in Aarhus and elsewhere.
                </p>
            </div>

            <div>
                <div className="bioHeader">
                    <p className="bioHeader">SELECTED</p>
                    <p className="bioHeader">EXHIBITIONS</p>
                    <br></br>
                </div>

                <div className="bioHeader">
                    2019 
                </div>
                <div className="exhibitionInfo">
                    CERAMIC MOMENTUM, group exhibition, CLAY, Museum of Ceramic Art, DK WEATHERED, solo show, Mark Kenly Domino Tan Showroom, København, DK
                </div>

                <div className="bioHeader">
                    2018
                </div>
                <div className="exhibitionInfo">
                    DON’T KNOW WHAT SHAPE I’M IN, solo show, Patrick Parrish Gallery, NYC, USA ABOUT CLAY, group exhibition, Fiskars, FIN MINDCRAFT18, group exhibition, Il Salone, Milano, IT
                
                </div>

                <div className="bioHeader">
                    2017 
                </div>
                <div className="exhibitionInfo">
                    NEW DANISH MODERN, group exhibition, O­space, Aarhus, DK TERRAIN, solo show, Galerie Maria Wettergren, Paris, FR MINDCRAFT17, group exhibition, Il Salone, Milano, IT DOMESTIC APPEAL, PART III, group exhibition, Chamber Gallery New York, USA
                </div>

                <div className="bioHeader">
                    2016
                </div>
                <div className="exhibitionInfo">
                    THE CURIO, CHART ART FAIR, group exhibition, Charlottenborg, København, DK FORÅRSUDSTILLINGEN, group exhibition, København, DK 
                </div>

                <div className="bioHeader">
                    2015
                </div>
                <div className="exhibitionInfo">
                    TILSIGTEDE SAMMENSÆTNINGER (I UTILSIGTEDE OPTRÆDENER),  solo show, Piscine, Aarhus, DK

                </div>
                <div className="endX">
                    <br></br>
                    <br></br>
                    X
                </div>
            </div>
        </div>
    )}
}

export default Bio;
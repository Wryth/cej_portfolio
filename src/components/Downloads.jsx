import React from 'react';
import './Downloads.css';

class Downloads extends React.Component{
    render(){
        return(
        <div id="dlContainer">
            <a className="pdfDL largeText" href={ this.props.pdf } download>CEJ_works.pdf</a>
        </div>
        );
    }
}

export default Downloads;

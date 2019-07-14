import React from 'react';
import './downloads.css';

class Downloads extends React.Component{
    render(){
        return(
        <div id="dlContainer">
            <a className="pdfDL" href={ process.env.PUBLIC_URL + "/dot.png" } /*download*/>carlemiljacobsen.pdf</a>
        </div>
        );
    }
}

export default Downloads;
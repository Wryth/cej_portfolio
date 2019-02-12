import React from 'react';
import './workList.css';

class WorkList extends React.Component {
    render(){
        return(
            <div className="workListContainer">
                <h2>Selected WORK</h2>
                <ol type="A" className="list">
                    <li>Collage</li>
                    <li>Red Volumes</li>
                    <li>Don't Know What Shape I'm In</li>
                    <li>Stone colours</li>
                </ol> 

            </div>
        );
    }
}

export default WorkList;
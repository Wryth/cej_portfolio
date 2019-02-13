import React from 'react';
import './workList.css';

class WorkList extends React.Component {
    render(){
        return(
            <div className="WorkListContainer">
                <h2 id="swText">Selected WORK</h2>
                <ol type="A" className="list">
                    <li className="projects">Collage</li>
                    <li className="projects">Red Volumes</li>
                    <li className="projects">Don't Know What Shape I'm In</li>
                    <li className="projects">Stone colours</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                    <li className="projects">-</li>
                </ol> 

            </div>
        );
    }
}

export default WorkList;
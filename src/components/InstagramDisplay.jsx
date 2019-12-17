import React from 'react';
import './InstagramDisplay.css';

class InstagramDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            igImg: '',
        };
    }
    componentDidMount() {
        this.setState({igImg: this.props.igImg})
    }
        render() {
            return (
                <div id="igContainer">
                    <img id="igSource" src={ this.state.igImg } alt="" />
                </div>
            );
        }
}
export default InstagramDisplay;

import React from 'react';
import './instagramDisplay.css';

class InstagramDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {igImg: 'https://www.instagram.com/p/B2OYGi-BfVG/media/?size=l'}
    }

    componentDidMount() {
        // GET most recent image added to instagram
        fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=' + process.env.REACT_APP_IG_TOKEN)
            .then(res => res.json())
            .then((res) => {
                this.setState({ igImg: res.data[0].media_url})
            }).catch(console.log)
    }

    render(){
        return(
        <div id="igContainer">
            <img id="igSource" src={this.state.igImg} alt=""/>
        </div>
        );
    }
}
export default InstagramDisplay;

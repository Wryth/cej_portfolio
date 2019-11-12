import React from 'react';
import './instagramDisplay.css';

class InstagramDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {igImg: 'https://www.instagram.com/p/B2OYGi-BfVG/media/?size=l'}
    }

    componentDidMount() {
        // GET most recent image added to instagram
        fetch('https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJXU0o4S1ZAsQzU0MzN6RGRzdkJjSEJvdnFOWmxBbnB4SW9sTncxX01abGhhcDZAIbE80clpmQkxlbFByWkpDa3FPUE14Um1mMi05UzRnR2tnNWlGTGFiNDVuZAmNlbXVQVUphNkZADWDRlX3JsRXVuUl9IN0dwcS13cm5z')
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

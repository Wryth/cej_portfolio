import React from 'react';
import './InstagramDisplay.css';

class InstagramDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {igImg: 'https://www.instagram.com/p/B2OYGi-BfVG/media/?size=l'}
    }

    componentDidMount() {
        fetch('https://api.instagram.com/oauth/authorize?app_id=800991050324371&redirect_uri=https%3A%2F%2Fcarlemiljacobsen.com%2F&scope=user_profile,user_media&response_type=code')
            .then((result) =>{
                console.log(result);
            })
            .catch();

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

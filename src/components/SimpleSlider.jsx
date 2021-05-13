import React, { Fragment } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

function imagesLoaded(parentNode) {
  const imgElements = [...document.querySelectorAll("img")];
  for (let i = 0; i < imgElements.length; i += 1) {
    const img = imgElements[i];
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: [],
      open: null,
      loading: true,
      dbImgs: [],
     };
    this.handleWheel = this.handleWheel.bind(this);
    this.onWindowResized = this.onWindowResized.bind(this);
  }

  handleStateChange = () => {
    this.setState({
      loading: !imagesLoaded(this.slider),
    });
  };

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('wheel', this.handleWheel);
    // ReactDOM.findDOMNode(this).addEventListener("orientationchange",this.handleChange);
    window.addEventListener('orientationchange', this.onWindowResized);


    this.setState({ dbImgs: this.props.dbImgs}, () => {
      const menu = this.Menu(this.props.dbImgs.map(x => {
        if(!x.metadata) {
          return {name: process.env.PUBLIC_URL + '/foto/carousel/' + x + '.jpg', title: x.split("_")[0]}
        }
        return {name: x.link, title: x.metadata.name.split(".")[0].split("_")[0]}
      }));
      this.setState({ mode: menu });
    });
  }

  onWindowResized() { //add debounce for performance?
    this.forceUpdate();
    this.slider.slickPrev();
    setTimeout(() => {
      this.slider.slickNext();
      },200);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('wheel', this.handleWheel);
    // ReactDOM.findDOMNode(this).removeEventListener("orientationchange", this.handleChange)
    window.removeEventListener('orientationchange', this.onWindowResized);
  }

  renderSpinner() {
    if (!this.state.loading) {
      // Render nothing if not loading
      return null;
    }
    return (
        <div className="bioHeader largeText spinner">LOADING ...</div>
    );
  }

  handleWheel(e) {
    e.preventDefault();
    e.deltaY > 0 || e.deltaX > 0 ? this.slider.slickNext() : this.slider.slickPrev();
  }

  // uses a direct image link
  MenuLinkItem = ({ pic, title, key }) => {
    return (
        <Fragment key={key}>
          <div className="titleBox smallText">
            <p className="pictureTitle smallText">{title}</p>
          </div>
          <img
              className="pictures"
              src={ pic }
              onLoad={this.handleStateChange}
              onError={this.handleStateChange}
              alt=''
          />
        </Fragment>
    );
  };

  // All items component
  // Important! add unique key
  Menu = (list) => list.map(el => {
    const { name, title } = el;
    return (
        this.MenuLinkItem({title:title, pic:name, key:{name}})
    );
  });


  render() {
    const classes = this.state.loading ? 'basket hide' : 'basket';

    const settings = {
      infinite: true,
      slidesToShow: 1.68,
      slidesToScroll: 1,
      speed: 1500,
      centerMode: true,
      arrow: true,
      autoplay: false,
      autoplaySpeed: 10000,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            autoplay: false,
            slidesToShow: 1, // on phone tablet
            speed: 500,
          }
        },
      ]
    };

    return (
      <Fragment>
        <Slider {...settings} ref={ slider => this.slider = slider } className={ classes }>
          { this.state.mode }
        </Slider>
        { this.renderSpinner() }
      </Fragment>
    );
  }
}

export default SimpleSlider;

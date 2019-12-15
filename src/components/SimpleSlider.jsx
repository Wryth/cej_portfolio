import React, { Fragment } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

function importAll(r) {
  return r.keys().map(r);
}

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
      dbImgs: []
     };
    this.handleWheel = this.handleWheel.bind(this);
  }

  handleStateChange = () => {
    this.setState({
      loading: !imagesLoaded(this.slider),
    });
  };

  componentDidMount() {
    /*
    console.log(this.props.dbImgs);
    if(this.state.dbImgs === []) {
      const pubimages = importAll(require.context('../../public/foto/carousel', false, /\.(png|jpe?g|svg)$/));
      const list2 = pubimages.map(x => x.split("/")[3].split(".")[0]);
      const objList = list2.map(x => {
        return {
          name: x,
          title: x.split("_")[0]
        }
      });
      const menu = this.Menu(objList);
      this.setState({ mode : menu});
    }
     */
    ReactDOM.findDOMNode(this).addEventListener('wheel', this.handleWheel);

    this.setState({ dbImgs: this.props.dbImgs}, () => {
      const menu = this.Menu(this.props.dbImgs.map(x => {
        return { name: x.link, title: x.metadata.name.split(".")[0].split("_")[0] }
      }));
      this.setState({ mode: menu });
    });

  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('wheel', this.handleWheel);
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
  MenuLinkItem = ({ pic, title }) => {
    return (
        <Fragment>
          <div className="titleBox">
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
        <this.MenuLinkItem
            title={title}
            pic={name}
            key={name}
        />
    );
  });

  render() {
    const classes = this.state.loading ? 'basket hide' : 'basket';
    let slidesInFrame = 1.68; // On screen
    let scrollSpeed = 1500;
    if(window.matchMedia("(max-width: 1050px)").matches) {
      slidesInFrame = 1; // on phone tablet
      scrollSpeed = 500;
    }

    const settings = {
      infinite: true,
      slidesToShow: slidesInFrame,
      slidesToScroll: 1,
      speed: scrollSpeed,
      centerMode: true,
      arrow: true,
      //autoplay: true,
      autoplaySpeed: 1000,
      variableWidth: true,
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

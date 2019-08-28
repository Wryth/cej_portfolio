import React, { Fragment } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickDemo.css";

function importAll(r) {
  return r.keys().map(r);
}

// selected prop will be passed
const MenuItem = ({ pic, title }) => {
  return (
    <Fragment>
      <div className="titleBox">
        <p className="pictureTitle smallText">{title}</p>
      </div>
      <img className="pictures" src={process.env.PUBLIC_URL + '/foto/carousel/' + pic + '.jpg'}/>
    </Fragment>
  );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name, title } = el;
  return (
    <MenuItem
      title={title}
      pic={name}
      key={name}
    />
  );
});


class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: [] } ;
    this.handleWheel = this.handleWheel.bind(this);
  }

  componentWillMount(){
    const pubimages = importAll(require.context('../../../public/foto/carousel', false, /\.(png|jpe?g|svg)$/));
    console.log(this.state.mode);
    const list2 = pubimages.map(x => x.split("/")[3].split(".")[0]);
    const objList = list2.map(x => {return {
      name: x,
      title: x.split("_")[0]}});
    console.log(list2);
    console.log(objList);
    const menu = Menu(objList);
    this.setState({ mode : menu});

    console.log(pubimages);
    console.log(require.context('../../../public/foto/carousel', false, /\.(png|jpe?g|svg)$/));

    /*
    pubimages.forEach((picture) => {
      let img = new Image().src = picture.fileName;
    });
    */
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('wheel', this.handleWheel);
  }
  
  handleWheel(e) {
    e.preventDefault();
    e.deltaY > 0 || e.deltaX > 0 ? this.slider.slickNext() : this.slider.slickPrev();
  }

  render() {
    var slidesInFrame = 1.68; // On screen
    var scrollSpeed = 1500;
    if(window.matchMedia("(max-width: 1050px)").matches) {
      slidesInFrame = 1; // on phone tablet
      scrollSpeed = 500;
    }

    var settings = {
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
      <Slider {...settings} ref={slider => this.slider = slider}>
        { this.state.mode }
      </Slider>
    );
  }
}

export default SimpleSlider;
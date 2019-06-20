import React from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickDemo.css";

// list of items
const list = [
    { name: '2019_1', title: "2019" },
    { name: '2018_10', title: "2018" },
    { name: '2018_9', title: "2018" },
    { name: '2018_8', title: "2018" },
    { name: '2018_7', title: "2018" },
    { name: '2018_6', title: "2018" },
    { name: '2018_5', title: "2018" },
    { name: '2018_4', title: "2018" },
    { name: '2018_3', title: "2018" },
    { name: '2018_2', title: "2018" },
    { name: '2018_1', title: "2018" },
    { name: '2018_0', title: "2018" },
    { name: '2017_7', title: "2017" },
    { name: '2017_5', title: "2017" },
    { name: '2017_4', title: "2017" },
    { name: '2017_3', title: "2017" },
    { name: '2017_2', title: "2017" },
    { name: '2017_1', title: "2017" },
    { name: '2016_3', title: "2016" },
    { name: '2016_2', title: "2016" },
    { name: '2016_1', title: "2016" },
    ];

// One item component
// selected prop will be passed
const MenuItem = ({ pic, title }) => {
  return (
      <img className="pictures" src={process.env.PUBLIC_URL + '/foto/' + pic + '.jpg'}/>
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
    this.handleWheel = this.handleWheel.bind(this);
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
    if ( !this.timeout ) {
      this.timeout = setTimeout(function() {
  
        // Reset timeout
        this.timeout = null;
  
        // Run our resize functions
        console.log( 'debounced '+ this.timeout );
  
      }, 66);
    }
  }

  render() {
    var slidesInFrame = 1.68; // On screen
    if(window.matchMedia("(max-width: 960px)").matches) {
      slidesInFrame = 1; // on phone tablet
    }

    var settings = {
      //className: "slider variable-width",
      infinite: true,
      slidesToShow: slidesInFrame,
      slidesToScroll: 1,
      speed: 500,
      centerMode: true,
      arrow: true,
      //autoplay: true,
      autoplaySpeed: 10000,
      //adaptiveHeight:true,
      //lazyLoad: true,
      variableWidth: true,
      //dots:true,
    };

    const menu = Menu(list);
    
    return (
      <Slider {...settings} ref={slider => this.slider = slider}>
        {menu}
      </Slider>
    );
  }
}

export default SimpleSlider;
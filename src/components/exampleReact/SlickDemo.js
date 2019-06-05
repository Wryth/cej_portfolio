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
    <div className="itemContainer">
      <div id="menu-info">
        <div id="title"><p className="worksTitle">Prod. year {title}</p></div>
      </div>
      <img className="pictures" src={process.env.PUBLIC_URL + '/foto/' + pic + '.jpg'}/>
    </div>
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
    e.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev();
  }

  render() {
    var settings = {
      infinite: true,
      slidesToShow: 1.68,
      speed: 500,
      centerMode: false,
      //arrow: false,
      //autoplay: true,
      autoplaySpeed: 10000,
      //adaptiveHeight:true,
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
import React, { Fragment } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dropbox from "dropbox";
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

  // selected prop will be passed
  MenuItem = ({ pic, title }) => {
    return (
      <Fragment>
        <div className="titleBox">
          <p className="pictureTitle smallText">{title}</p>
        </div>
        <img
          className="pictures"
          src={process.env.PUBLIC_URL + '/foto/carousel/' + pic + '.jpg'}
          onLoad={this.handleStateChange}
          onError={this.handleStateChange}
          alt=''
          />
      </Fragment>
    );
  };

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


renderSpinner() {
  if (!this.state.loading) {
    // Render nothing if not loading
    return null;
  }
  return (
    <div className="bioHeader largeText spinner">LOADING ...</div>
  );
}

  componentDidMount() {
    const pubimages = importAll(require.context('../../public/foto/carousel', false, /\.(png|jpe?g|svg)$/));
    console.log(this.state.mode);
    const list2 = pubimages.map(x => x.split("/")[3].split(".")[0]);
    const objList = list2.map(x => {return {
      name: x,
      title: x.split("_")[0]}});
    console.log(list2);
    console.log(objList);
    const menu = this.Menu(objList);
    //this.setState({ mode : menu});

    console.log(pubimages);
    console.log(require.context('../../public/foto/carousel', false, /\.(png|jpe?g|svg)$/));
    ReactDOM.findDOMNode(this).addEventListener('wheel', this.handleWheel);


    const dbx = new Dropbox.Dropbox({ fetch: fetch , accessToken: '9vE_oDUSeHoAAAAAAAAAM0zpFnPH1G0kstaqnr82WdYtLJahQiIFuQRU6qGoPQOK' });
    /*
    dbx.usersGetCurrentAccount()
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    */
    dbx.filesListFolder({path: ''})
        .then((res) => {
          return res.entries.map(x => x.path_lower)
        })
        .then((res) => {
              // demo stuff
          Promise.all(res.map(x => dbx.filesGetTemporaryLink({path: x})))
              .then((result) => {
                this.setState({dbImgs: result}, () => {

                  const menu = this.Menu(this.state.dbImgs.map(x => { return { name:x.link, title: x.metadata.name.split(".")[0] }}));

                 this.setState({mode: menu});

                  console.log(this.state.dbImgs[0].link)})
              })
              .catch((error) => {
                console.error(error)
              });
            }
        )
        .catch((error) => {
          console.error(error);
        });
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('wheel', this.handleWheel);
  }

  handleWheel(e) {
    e.preventDefault();
    e.deltaY > 0 || e.deltaX > 0 ? this.slider.slickNext() : this.slider.slickPrev();
  }

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
      <Slider {...settings} ref={slider => this.slider = slider} className={classes}>
        { this.state.mode }
      </Slider>
      { this.renderSpinner() }
      </Fragment>
    );
  }
}

export default SimpleSlider;

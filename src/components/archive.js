import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './archive.css';
//import f from "../foto/*.jpg";
//import f1 from "./foto/f1.jpg";
//https://www.npmjs.com/package/react-horizontal-scrolling-menu

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
const MenuItem = ({ pic, title, selected }) => {
    return (
      <div
        className="menu-item"
      >
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
    const { name, title} = el;
    return (
      <MenuItem
        title={title}
        pic={name}
        key={name}
      />
    );
});


class Archive extends React.Component{
    state = {
        selected: 'item1'
    };

    onSelect = key => {
        this.setState({ selected: key });
    }

    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = Menu(list, selected);

        return(
        <div id="archiveContainer">
            <ScrollMenu
            data={menu}
            selected={selected}
            onSelect={this.onSelect}
            />
        </div>
        );
    }
}

export default Archive;
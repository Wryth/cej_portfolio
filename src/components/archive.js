import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './archive.css';
//import f from "../foto/*.jpg";
//import f1 from "./foto/f1.jpg";
//import f1 from "../foto/Chamber_Fran Parente_Powder Table-1.jpg";
//import f3 from "../foto/Charlottenborg_Side.jpg";
//import f4 from "../foto/6.jpg";
//import f5 from "./foto/Chamber_Fran Parente_Powder Table-1.jpg";
//import f6 from "./foto/Chamber_Fran Parente_Powder Table-1.jpg";

//https://www.npmjs.com/package/react-horizontal-scrolling-menu

// list of items
const list = [
    { name: '1' },
    { name: '3' },
    { name: '6' },
    { name: '10' },
    { name: 'Chamber_Fran Parente_Black Lines relief-2' },
    { name: 'Chamber_Fran Parente_Powder Table-1' },
    { name: 'Chamber_Fran Parente_Powder Table-5' },
    { name: 'Chamber_Fran Parente_Red Powder Variation 4-1' },
    { name: 'Chamber_Fran Parente_Red Powder Variation 5-1' }
  ];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
    return (
      <div
        className="menu-item"
      >
        {/*{text}*/}
        <img src={process.env.PUBLIC_URL + '/foto/' + text + '.jpg'} width="500px" height="500px"/>
      </div>
    );
  };

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
    const { name } = el;
    return (
      <MenuItem
        text={name}
        key={name}
      />
    );
});

const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

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
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
            />
        </div>
        );
    }
}

export default Archive;
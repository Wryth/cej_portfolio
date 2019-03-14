import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './archive.css';
//import f from "../foto/*.jpg";
//import f1 from "./foto/f1.jpg";
//https://www.npmjs.com/package/react-horizontal-scrolling-menu

// list of items
const list = [
    { name: 'black', title: "POLYPOWDER #1", materials: "Acrylic, fiber concrete,  pigments from crushed stones, polystyrene and steel.", dim: "H 25 cmx W 20 cm  D 30 cm", weight: "ca 5 kg" },
    { name: 'black', title: "POLYPOWDER #1", materials: "Acrylic, fiber concrete,  pigments from crushed stones, polystyrene and steel.", dim: "H 25 cmx W 20 cm  D 30 cm", weight: "ca 5 kg" },
    { name: 'black', title: "POLYPOWDER #1", materials: "Acrylic, fiber concrete,  pigments from crushed stones, polystyrene and steel.", dim: "H 25 cmx W 20 cm  D 30 cm", weight: "ca 5 kg" },
    { name: 'black', title: "POLYPOWDER #1", materials: "Acrylic, fiber concrete,  pigments from crushed stones, polystyrene and steel.", dim: "H 25 cmx W 20 cm  D 30 cm", weight: "ca 5 kg" },
    { name: 'black', title: "POLYPOWDER #1", materials: "Acrylic, fiber concrete,  pigments from crushed stones, polystyrene and steel.", dim: "H 25 cmx W 20 cm  D 30 cm", weight: "ca 5 kg" },
    { name: 'black', title: "POLYPOWDER #1", materials: "Acrylic, fiber concrete,  pigments from crushed stones, polystyrene and steel.", dim: "H 25 cmx W 20 cm  D 30 cm", weight: "ca 5 kg" },
    { name: 'black', title: "POLYPOWDER #1", materials: "Acrylic, fiber concrete,  pigments from crushed stones, polystyrene and steel.", dim: "H 25 cmx W 20 cm  D 30 cm", weight: "ca 5 kg" },
    { name: 'black', title: "POLYPOWDER #1", materials: "Acrylic, fiber concrete,  pigments from crushed stones, polystyrene and steel.", dim: "H 25 cmx W 20 cm  D 30 cm", weight: "ca 5 kg" },
    { name: 'black', title: "POLYPOWDER #1", materials: "Acrylic, fiber concrete,  pigments from crushed stones, polystyrene and steel.", dim: "H 25 cmx W 20 cm  D 30 cm", weight: "ca 5 kg" }
  ];

// One item component
// selected prop will be passed
const MenuItem = ({ pic, title, materials, dim, weight, selected }) => {
    return (
      <div
        className="menu-item"
      >
        <div id="menu-info">
          <div id="title">Title {title}</div>
          <div id="materials">Materials {materials}</div>
          <div id="dim">Dim. {dim}</div>
          <div id="weight">Weight {weight}</div>
        </div>
        <img src={process.env.PUBLIC_URL + '/foto/' + pic + '.jpg'} height="100%"/>
      </div>
    );
  };

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
    const { name, title, materials, dim, weight } = el;
    return (
      <MenuItem
        weight={weight}
        dim={dim}
        materials={materials}
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
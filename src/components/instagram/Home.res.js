// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

import './Home.css';
;

function Home$Home(Props) {
  var igImg = Props.igImg;
  return React.createElement("div", {
              id: "igContainer"
            }, React.createElement("img", {
                  id: "igSource",
                  alt: "home_image",
                  src: igImg
                }));
}

var Home = {
  make: Home$Home
};

export {
  Home ,
}
/*  Not a pure module */

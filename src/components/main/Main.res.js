// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Bio from "../bio/Bio.res.js";
import * as Home from "../home/Home.res.js";
import * as React from "react";
import * as MyHeader from "../header/MyHeader.res.js";
import * as Downloads from "../downloads/Downloads.res.js";
import * as PervasivesU from "rescript/lib/es6/pervasivesU.js";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.res.js";

import './Main.css';
import SimpleSlider from "../slider/SimpleSlider";
import { fetch_slider_pics_js, fetch_home_pic_js, fetch_cv_file_js, fetch_pdf_file_js } from "./fetchDropBoxFiles";
;

async function fetch_slider_pics(setSilderPics) {
  var slider_pics = await (fetch_slider_pics_js());
  return setSilderPics(function (param) {
              return slider_pics;
            });
}

async function fetch_home_pic(setHomePic) {
  var pic = await (fetch_home_pic_js());
  return setHomePic(function (param) {
              return pic;
            });
}

async function fetch_pdf_file(setPdfFile) {
  var pdfFile = await (fetch_pdf_file_js());
  return setPdfFile(function (param) {
              return pdfFile;
            });
}

async function fetch_cv_file(setCvFile) {
  var cvFile = await (fetch_cv_file_js());
  var jsonFile = JSON.stringify(cvFile);
  var json = jsonFile !== undefined ? jsonFile : PervasivesU.failwith("Failed to fetch json");
  var result = JSON.parse(json);
  return setCvFile(function (param) {
              return result;
            });
}

function Main$Main(Props) {
  var init = [{
      year: "",
      title: "",
      description: "",
      location: "",
      city: "",
      country: ""
    }];
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var match = React.useState(function () {
        return "";
      });
  var setHomePic = match[1];
  var homepic = match[0];
  var match$1 = React.useState(function () {
        return [];
      });
  var setdbImgs = match$1[1];
  var dbImgs = match$1[0];
  var match$2 = React.useState(function () {
        return init;
      });
  var setCv = match$2[1];
  var match$3 = React.useState(function () {
        return "";
      });
  var setPdfFile = match$3[1];
  React.useEffect((function () {
          fetch_home_pic(setHomePic);
          console.log(dbImgs.toString());
          fetch_slider_pics(setdbImgs);
          fetch_cv_file(setCv);
          fetch_pdf_file(setPdfFile);
        }), []);
  var match$4 = url.path;
  var content;
  var exit = 0;
  if (match$4) {
    switch (match$4.hd) {
      case "" :
          if (match$4.tl) {
            exit = 1;
          } else {
            content = React.createElement(Home.Home.make, {
                  igImg: homepic,
                  key: homepic
                });
          }
          break;
      case "archive" :
          if (match$4.tl) {
            exit = 1;
          } else {
            content = (<SimpleSlider dbImgs={dbImgs} />);
          }
          break;
      case "bio" :
          if (match$4.tl) {
            exit = 1;
          } else {
            content = React.createElement(Bio.Bio.make, {
                  cv: match$2[0]
                });
          }
          break;
      case "downloads" :
          if (match$4.tl) {
            exit = 1;
          } else {
            content = React.createElement(Downloads.Downloads.make, {
                  pdf: match$3[0]
                });
          }
          break;
      default:
        exit = 1;
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    content = React.createElement(Home.Home.make, {
          igImg: homepic,
          key: homepic
        });
  }
  return React.createElement("div", {
              className: "mainContainer"
            }, React.createElement(MyHeader.MyHeader.make, {}), content);
}

var Main = {
  make: Main$Main
};

export {
  fetch_slider_pics ,
  fetch_home_pic ,
  fetch_pdf_file ,
  fetch_cv_file ,
  Main ,
}
/*  Not a pure module */

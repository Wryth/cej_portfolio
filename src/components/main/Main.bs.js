// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as $$Promise from "@ryyppy/rescript-promise/src/Promise.bs.js";
import * as Downloads from "../downloads/Downloads.bs.js";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.bs.js";

import './Main.css';
import MyHeader from '../header/MyHeader.jsx';
import Bio from '../bio/Bio';
import InstagramDisplay from '../instagram/InstagramDisplay.jsx';
import SimpleSlider from "../slider/SimpleSlider";
import { fetch_slider_pics2, fetch_home_pic2, fetch_cv_file2 } from "./fetchDropBoxFiles";
;

function handle_error(error) {
  if (error.RE_EXN_ID === $$Promise.JsError) {
    var msg = error._1.message;
    if (msg !== undefined) {
      console.log("Some JS error msg: " + msg);
    } else {
      console.log("Must be some non-error value");
    }
    return ;
  }
  console.log("Some unknown error");
}

function fetch_slider_pics(param) {
  return (fetch_slider_pics2());
}

function fetch_home_pic(param) {
  return (fetch_home_pic2());
}

function fetch_cv_file(param) {
  return (fetch_cv_file2());
}

function Main$Main(Props) {
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
  React.useEffect((function () {
          console.log("" + homepic + "");
          fetch_home_pic(undefined).then(function (x) {
                Curry._1(setHomePic, (function (param) {
                        return x;
                      }));
              });
          console.log("" + dbImgs.toString() + "");
          $$Promise.$$catch(fetch_slider_pics(undefined).then(function (x) {
                    Curry._1(setdbImgs, (function (param) {
                            return x;
                          }));
                  }), (function (e) {
                  handle_error(e);
                  return Promise.resolve(undefined);
                }));
        }), []);
  var match$2 = url.path;
  var tmp;
  var exit = 0;
  if (match$2) {
    switch (match$2.hd) {
      case "" :
          if (match$2.tl) {
            exit = 1;
          } else {
            tmp = (<InstagramDisplay igImg={homepic} key={homepic} />);
          }
          break;
      case "archive" :
          if (match$2.tl) {
            exit = 1;
          } else {
            tmp = (<SimpleSlider dbImgs={dbImgs} />);
          }
          break;
      case "bio" :
          if (match$2.tl) {
            exit = 1;
          } else {
            tmp = (<Bio />);
          }
          break;
      case "downloads" :
          if (match$2.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(Downloads.Downloads.make, {
                  pdf: ""
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
    tmp = (<InstagramDisplay igImg={homepic} key={homepic} />);
  }
  return React.createElement("div", {
              className: "mainContainer"
            }, (<MyHeader />), React.createElement("div", {
                  id: "contentBox"
                }, tmp));
}

var Main = {
  make: Main$Main
};

export {
  handle_error ,
  fetch_slider_pics ,
  fetch_home_pic ,
  fetch_cv_file ,
  Main ,
}
/*  Not a pure module */

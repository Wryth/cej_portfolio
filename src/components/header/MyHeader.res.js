// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as MyMenu from "../menu/MyMenu.res.js";

import './MyHeader.css';
;

function MyHeader$Contact(Props) {
  return React.createElement(React.Fragment, undefined, (<div className="contactText">
        <pre className="smallText">
            <a className="emailLink contactTextLines" href="mailto:carlemiljacobsen@gmail.com">
                    E-mail    carlemiljacobsen&thinsp;(at)&thinsp;gmail.com
            </a>
        </pre>
            <pre className="contactTextLines smallText">Phone    +45 31701698</pre>
        </div>));
}

var Contact = {
  make: MyHeader$Contact
};

function MyHeader$MyHeader(Props) {
  return React.createElement("div", {
              className: "MyHeaderContainer"
            }, React.createElement(MyMenu.Menu.make, {}), React.createElement(MyHeader$Contact, {}));
}

var MyHeader = {
  make: MyHeader$MyHeader
};

export {
  Contact ,
  MyHeader ,
}
/*  Not a pure module */

// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

import './Downloads.css'
;

function Downloads(Props) {
  var pdf = Props.pdf;
  return React.createElement("div", {
              id: "dlContainer"
            }, React.createElement("a", {
                  className: "pdfDL largeText",
                  download: pdf,
                  href: pdf
                }, "CEJ_works.pdf"));
}

var make = Downloads;

export {
  make ,
  
}
/*  Not a pure module */

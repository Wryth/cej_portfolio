// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Js_dict from "rescript/lib/es6/js_dict.js";

import './Bio.css';
;

function Bio$Exhibition(Props) {
  var data = Props.data;
  var $$location = data.location !== "" ? ", " + data.location : "";
  var city = data.city !== "" ? ", " + data.city : "";
  var country = data.country !== "" ? ", " + data.country : "";
  var place = $$location + city + country;
  return React.createElement(React.Fragment, undefined, data.title, ", ", React.createElement("i", undefined, data.description), place, React.createElement("br", undefined));
}

var Exhibition = {
  make: Bio$Exhibition
};

function Bio$YearGroup(Props) {
  var data = Props.data;
  var result = data[1].map(function (data) {
        return React.createElement(Bio$Exhibition, {
                    data: data
                  });
      });
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "bioYear largeText"
                }, data[0]), React.createElement("p", {
                  className: "exhibitionInfo smallText"
                }, result), React.createElement("br", undefined), React.createElement("br", undefined));
}

var YearGroup = {
  make: Bio$YearGroup
};

function Bio$CV(Props) {
  var cv = Props.cv;
  var groupByYear = function (agg, id) {
    if (Object.keys(agg).includes(id.year)) {
      agg[id.year] = agg[id.year].concat([id]);
      return agg;
    } else {
      agg[id.year] = [id];
      return agg;
    }
  };
  var yearGroups = cv.reduce(groupByYear, {});
  var result = Js_dict.entries(yearGroups).map(function (data) {
          return React.createElement(Bio$YearGroup, {
                      data: data,
                      key: data[0]
                    });
        }).reverse();
  return React.createElement(React.Fragment, undefined, result, React.createElement("br", undefined), React.createElement("br", undefined));
}

var CV = {
  make: Bio$CV
};

const onXclick = () => {
			document.getElementById('headerMenu').scrollIntoView();
		};
;

function Bio$Bio(Props) {
  var cv = Props.cv;
  return React.createElement("div", {
              id: "bioContainer"
            }, (<>
				<div className="bioHeader largeText">
					BIO
					</div>
				<p className="bioText largeText">
					Since Danish sculptor Carl Emil Jacobsen (b. 1987) graduated from Kolding School of Design in 2012, his practice has oscillated between art and design, revol&shy;ving around existentialism, ritualistic sophisti&shy;cation and solid craftsmanship.
				</p>
				<p className="bioText largeText">
					Working with found materials such as stones from the heath, bricks from demolished buildings, chalk&shy;stone and marble, Carl Emil Jacobsen trans&shy;forms massive stones into light, thin and crisp shells of fine colour. As an ode to the richness of natural colours in the Nordic landscape, he brings new life to the powdered stone by converting it into layers of poetic coloured pigment — in bright to burnt hues — and a sculptural element in itself. His iron sculp&shy;tures, some polished, some burnt,  are created intuitively out of welding work without preliminary studies resulting in fragmented pieces hammered together to instinctive forms.
				</p>
				<p className="bioText largeText">
					Inspired by the dictum of late Danish sculptor Willy Ørskov's theory that "the content of the sculpture  is sculpture", his nonfigurative sculp&shy;tures exist  on their own terms as abstract, physical forms fostering experiential connection over intellectual interference in the elastic borderland between nature and culture.
				</p>
				<p className="bioText textEnd largeText">
					Carl Emil Jacobsen is represented by Galerie Maria Wettergren in Paris and has been exhibited at Art Basel, PAD, Clay Museum of Ceramic Art Denmark, Mindcraft Exhibition in Milan, Patrick Parrish Gallery, Chamber Gallery, Kunsthal Charlottenborg, Piscine and elsewhere.
				</p>
			</>), React.createElement(React.Fragment, undefined, React.createElement("div", {
                      className: "bioHeader largeText"
                    }, React.createElement("p", {
                          className: "bioHeader largeText"
                        }, "SELECTED", React.createElement("br", undefined), "EXHIBITIONS")), React.createElement(Bio$CV, {
                      cv: cv
                    }), React.createElement("div", {
                      className: "xEnd largeText",
                      onClick: onXclick
                    }, "X")));
}

var Bio = {
  make: Bio$Bio
};

export {
  Exhibition ,
  YearGroup ,
  CV ,
  Bio ,
}
/*  Not a pure module */

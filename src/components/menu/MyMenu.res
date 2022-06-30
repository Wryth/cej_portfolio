%%raw(`
// import React from 'react';
// import {
//     NavLink,
//   } from "react-router-dom";
import './MyMenu.css';
`)

module Menu = {
    // Module contents
@react.component
let make = () => {
//     let (active_dl, set_active_dl) = React.useState(_ => 0)
//     let url = RescriptReactRouter.useUrl()

//     switch url.path {
//     | list{"user"} => <User id />
//     | list{"/"} => < />
//     | _ => <PageNotFound/>
//   }

    <div id="menuContainer">
        <div className="menuOptions">
                <button id="name"
                    className="menuOption"
                    onClick={_=>RescriptReactRouter.push("/")}
                    >
                        {React.string("CARL EMIL JACOBSEN")}
                </button>

                <a id="igLink" className="menuOption" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/carlemiljacobsen/">{React.string("Instagram")}</a>

                <div className="innerMenu">
                    <div className="innerContainer">
                        <button 
                            id="menuArchive"
                            className="menuOption"
                            // activeClassName="active"
                            onClick={_=>RescriptReactRouter.push("/archive")}
                        >
                            {React.string("Selected works")}
                        </button>

                        <button className="menuOption"
                            // activeClassName="active"
                            id="menuBio"
                            onClick={_=>RescriptReactRouter.push("/bio")}
                        >{React.string("CV")}</button>


                        <button
                            className="menuOption"
                            // activeClassName="active"
                            id="menuDownloads"
                            onClick={_=>RescriptReactRouter.push("/downloads")}
                        >{React.string("Download")}</button>
                    </div>
                </div>
        </div>
    </div>
}
}



// %%raw(`
// class Menu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         activeDL: false
//     };
//   }
// 
//     render(){
//         return(
//             <div id="menuContainer">
//                 <div className="menuOptions">
//                         <NavLink exact id="name"
//                             className="menuOption"
//                             to="/"
//                             >CARL EMIL JACOBSEN
//                         </NavLink>
// 
//                         <a id="igLink" className="menuOption" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/carlemiljacobsen/">Instagram</a>
// 
//                         <div className="innerMenu">
//                             <div className="innerContainer">
//                                 <NavLink className="menuOption"
//                                 activeClassName="active"
//                                 id="menuArchive"
//                                 to="/archive"
//                                 >Selected works
//                                 </NavLink>
// 
//                                 <NavLink className="menuOption"
//                                 activeClassName="active"
//                                 id="menuBio"
//                                 to="/bio"
//                                 >CV</NavLink>
// 
//                                 <NavLink className="menuOption"
//                                 activeClassName="active"
//                                 id="menuDownloads"
//                                 to="/downloads"
//                                 >Download</NavLink>
//                             </div>
//                         </div>
//                 </div>
//             </div>
//         );
//     }
// }
// 
// export default Menu;
// 
// `)
%%raw(`import './MyMenu.css';`)

module Menu = {

@react.component
let make = () => {
<div id="menuContainer">
    <div className="menuOptions">
        <button id="name"
            className="menuOption"
            onClick={_ => RescriptReactRouter.push("/")}
        >
            {React.string("CARL EMIL JACOBSEN")}
        </button>

        <a 
            id="igLink" 
            className="menuOption" 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.instagram.com/carlemiljacobsen/"
        >
            {React.string("Instagram")}
        </a>

        <div className="innerMenu">
            <div className="innerContainer">
                <button 
                    id="menuArchive"
                    className="menuOption"
                    // activeClassName="active"
                    onClick={_ => RescriptReactRouter.push("/archive")}
                >
                    {React.string("Selected works")}
                </button>

                <button className="menuOption"
                    // activeClassName="active"
                    id="menuBio"
                    onClick={_ => RescriptReactRouter.push("/bio")}
                >
                    {React.string("CV")}
                </button>


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

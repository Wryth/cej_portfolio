%%raw(`import './MyMenu.css';`)

module Menu = {
  @react.component
  let make = () => {
    <>
      <button id="name" className="menuOption" onClick={_ => RescriptReactRouter.push("/")}>
        {React.string("CARL EMIL JACOBSEN")}
      </button>
      <div className="innerMenu">
          <button
            className="menuOption"
            id="menuArchive"
            onClick={_ => RescriptReactRouter.push("/archive")}>
            {React.string("Selected works")}
          </button>
          <button
            className="menuOption"
            id="menuBio"
            onClick={_ => RescriptReactRouter.push("/bio")}>
            {React.string("CV")}
          </button>
          <button
            className="menuOption"
            id="menuDownloads"
            onClick={_ => RescriptReactRouter.push("/downloads")}>
            {React.string("Download")}
          </button>
        </div>
      <a
        id="igLink"
        className="menuOption"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/carlemiljacobsen/">
        {React.string("Instagram")}
      </a>
    </>
  }
}

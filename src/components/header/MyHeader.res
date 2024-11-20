%%raw(`
import './MyHeader.css';
`)

module Contact = {
  @react.component
  let make = () => {
    <>
      %raw(`
        <div className="contactText">
        <pre className="smallText">
            <a className="emailLink contactTextLines" href="mailto:carlemiljacobsen@gmail.com">
                    E-mail    carlemiljacobsen&thinsp;(at)&thinsp;gmail.com
            </a>
        </pre>
            <pre className="contactTextLines smallText">Phone    +45 31701698</pre>
        </div>
		`)
    </>
  }
}

module MyHeader = {
  open MyMenu

  @react.component
  let make = () => {
    <div className="MyHeaderContainer">
      <Menu />
      <Contact />
    </div>
  }
}

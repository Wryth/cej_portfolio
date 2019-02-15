import React from "react";

class InlineStylesTutorial extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowing: false,
    }
    this.toggleIsShowing = this.toggleIsShowing.bind(this);
  }

  toggleIsShowing() {
    this.setState(prevState => ({
      isShowing: ! prevState.isShowing
    }));
  }

  render() {
    return (
      <div>
        <div>
        <button onClick={this.toggleIsShowing}>Show Text</button>
        </div>
        <p style={{display: this.state.isShowing ? "inherit" : "none"}}>This is the text!</p>
      </div>
    )
  }
}


export default InlineStylesTutorial;
import React, { Component } from "react";

import Timer from "./timer";
export class announcement extends Component {
  //! Last warning before removing stuff
  componentWillUnmount() {
    alert("You accepted Terms & Conditions");
    // if (window.confirm("Are yu sure?")) {
    //   return true;
    // }
  }
  render() {
    return (
      <div className="container bg-dark text-left p-0 mt-4">
        <h1 className="aboutheader pt-3 ml-4">Welcome</h1>
        <p className="abouttext text-white mx-4">
          Lorem Ipsum Murat TV is simply dummy text of the printing and type
          settin.Since the 1500s, when Murat TV unknown printer took remaining
          Murat TV unchanged.Murat TV in the 1960s with the release of versions
          of Murat TV Lorem Ipsum.
        </p>
        <button
          className="btn-danger mb-3 ml-4 px-2 font-weight-bolder"
          onClick={this.props.clickHandler}
        >
          Got it!
        </button>
        <Timer></Timer>
      </div>
    );
  }
}

export default announcement;

import React, { Component } from "react";

class Package extends Component {
  render() {
    if (this.props.data) {
      var npm = this.props.data.package.map(function (npm) {
        return (
          <div key={npm.title}>
            <h3>
              <a href={npm.link} target="_blank">
                {" "}
                {npm.title}
              </a>
            </h3>

            <p>{npm.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="npm">
        <div className="row education">
         
          
        </div>
      </section>
    );
  }
}

export default Package;

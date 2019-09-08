import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

class DynamicHeader extends Component {
  componentWillMount() {
    let title = this.props.title;

    if (title.includes(this.props.themeName)) {
      console.log("thik xa");
      return;
    } else {
    }
    // title = title.split(" ");
    // console.log(title);

    // for (let i = 0; i < title.length; i++) {
    //   if (window.location.href.includes(this.props.themeName)) {
    //     console.log("thik xa");
    //   } else {
    //     const theme = this.props.allTheme;
    //     for (let j = 0; j < theme.length; j++) {
    //       if (title.includes(theme[j])) {
    //         console.log("yup");
    //       }
    //     }
    //   }
    // }
    // console.log(title);
  }
  render() {
    let title = this.props.title;
    let themeData = "";
    if (title.includes(this.props.themeName)) {
      console.log("thik xa");
    } else {
      themeData = this.props.themeName;
    }
    if (
      themeData == "Expecting Discount" ||
      themeData == "#dDates" ||
      themeData == "#lata" ||
      themeData == "#trekImage" ||
      themeData == "#lastPara"
    ) {
      themeData = "";
    }
    return (
      <section className="dynamicHeader">
        <Helmet>
          <title>
            {this.props.title} {this.props.themeName}
          </title>
          <meta name="description" content={this.props.para.substr(0, 160)} />
        </Helmet>
        <h1 className="trekh1">
          {this.props.title} {themeData}
        </h1>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(DynamicHeader);

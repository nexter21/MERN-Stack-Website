import React, { Component } from "react";

export default class WhatWDo extends Component {
  onClick = e => {
    const frame = document.querySelector("iframe");

    frame.setAttribute("src", "");

    console.log("clicked");
  };

  aClick = e => {
    const frame = document.querySelector("iframe");

    frame.setAttribute("src", "https://www.youtube.com/embed/zBuPB3K0StQ");
  };

  render() {
    // const myModal = document.getElementById("videoModal");

    // myModal.modal({
    //   backdrop: "static",
    //   keyboard: false
    // });
    return (
      <div>
        <section id="video-play">
          <div class="dark-overlay">
            <div class="row">
              <div class="col">
                <div class="container" id="playArea">
                  <a
                    href="#"
                    class="video"
                    data-video="https://www.youtube.com/embed/zBuPB3K0StQ"
                    data-toggle="modal"
                    data-target="#videoModal"
                    onClick={this.aClick}
                    data-backdrop="static"
                    data-keyboard="false"
                  >
                    <i class="fas fa-play fa-3x" />
                  </a>
                  <h1>See What You Will Experience</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="modal fade" id="videoModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">
                <button
                  class="close"
                  data-dismiss="modal"
                  onClick={this.onClick}
                >
                  <span>&times;</span>
                </button>
                <div className="frame">
                  <iframe
                    src="https://www.youtube.com/embed/zBuPB3K0StQ"
                    height="350"
                    width="100%"
                    frameborder="0"
                    allowfullscreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

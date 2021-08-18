import React, { Component } from "react"
import BackgroundVideo from "react-background-video-player"
import video from "./background3.mp4"

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: typeof window !== "undefined" ? window.innerWidth : "100vw",
      windowHeight:
        typeof window !== "undefined" ? window.innerHeight : "100vh",
    }
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.handleResize)
    }
  }

  componentWillMount() {
    if (typeof document !== "undefined") {
      window.removeEventListener("resize", this.handleResize)
    }
  }

  handleResize = () => {
    if (typeof document !== "undefined") {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    }
  }

  render() {
    return (
      <BackgroundVideo
        style={{ height: "50vh" }}
        ref={(p) => (this.player = p)}
        containerWidth={this.state.windowWidth}
        containerHeight={this.state.windowHeight}
        src={video}
        startTime={1}
        autoPlay={true}
        muted={true}
        playsInline={true}
      />
    )
  }
}

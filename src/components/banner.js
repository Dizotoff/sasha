import React from "react"
import Player from "./player"

const Banner = ({ children }) => (
  <div
    style={{
      height: "50vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "static",
      backgroundColor: "#111111",
    }}
  >
    <Player></Player>

    <div style={{ color: "white", zIndex: "1", maxWidth: "600px" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        SAVELIEVA PHOTOGRAPHY
      </h1>
    </div>
  </div>
)

export default Banner

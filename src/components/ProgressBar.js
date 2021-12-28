import React from "react";

function ProgressBar({ percent }) {
  return (
    <div
      style={{
        width: `${percent}%`,
        height: "6px",
        borderRadius: "10px",
        margin: "1.2rem 0",
        background: "hotpink",
      }}
    ></div>
  );
}

export default ProgressBar;

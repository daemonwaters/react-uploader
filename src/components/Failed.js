import React from "react";
import styled from "styled-components";

const Red = styled.div`
  width: 50%;
  padding: 1rem;
  text-align: center;
  background: red;
  text-transform: capitalize;
  border-radius: 6px;
  color: #fff;
`;

function Failed() {
  return (
    <Red>
      <p>Upload failed , try again.</p>
    </Red>
  );
}

export default Failed;

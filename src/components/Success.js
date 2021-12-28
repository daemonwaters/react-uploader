import React from "react";
import styled from "styled-components";

const Green = styled.div`
  width: 50%;
  padding: 1rem;
  text-align: center;
  background: limegreen;
  text-transform: capitalize;
  border-radius: 6px;
  color: #fff;
`;

function Success() {
  return (
    <Green>
      <p>Success!</p>
    </Green>
  );
}

export default Success;

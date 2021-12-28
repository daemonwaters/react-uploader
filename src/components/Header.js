import React from "react";
import styled from "styled-components";

const Wrap = styled.header`
  width: 100vw;
  height: 4rem;
  background: hsl(195, 60%, 65%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #fff;

  h2 {
    text-transform: capitalize;
  }
`;

function Header() {
  return (
    <Wrap>
      <h2>Welcome to Firebase uploader</h2>
    </Wrap>
  );
}

export default Header;

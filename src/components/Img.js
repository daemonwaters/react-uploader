import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Img({ src, alt }) {
  return (
    <ImgContainer>
      <img src={src} alt={alt} />
    </ImgContainer>
  );
}

export default Img;

import React from "react";
import styled from "styled-components";
import Img from "./Img";

const GridWrapper = styled.div`
  width: 940px;
  height: 940px;
  border: solid 1px #000;
  margin: 1rem auto;
  border-radius: 6px;
  display: grid;
  padding: 0.4rem;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(3, 300px);
  gap: 0.5rem;
`;

function Grid({urls}) {
  return (
    <GridWrapper>
      {urls.map((url, index) => {
        return <Img src={url} key={index} alt={`${index + url}`} />;
      })}
    </GridWrapper>
  );
}

export default Grid;

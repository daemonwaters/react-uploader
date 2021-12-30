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

function Grid({ urls }) {
  return (
    <GridWrapper>
      {urls
        .sort((a, b) => b.uploadTime - a.uploadTime)
        .map((item, index) => {
          return <Img src={item.url} key={index} alt={`pic-${index}`} />;
        })}
    </GridWrapper>
  );
}

export default Grid;

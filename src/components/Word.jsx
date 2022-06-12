import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: inline-block;
  width: 20vw;
  height: 30vh;
  min-height: 300px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 15px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 5px 0;
  }
`;

const Btn = styled.button`
  width: 5vw;
  margin: 0 5px;
`;

function Word({ id, name }) {
  const [select, setSelect] = useState(true);
  const onClick = () => setSelect((prev) => !prev);
  return (
    <Box id={id}>
      <p>{name}</p>
      {/* <Btn>1</Btn> */}
      <Btn onClick={() => window.open(`${"https://www.naver.com/"}`, "_blank")}>
        Go
      </Btn>
      <Btn onClick={onClick}> {select ? <>clip</> : <>UnClip</>}</Btn>
    </Box>
  );
}

export default Word;

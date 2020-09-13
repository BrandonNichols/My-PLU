import React, { useState } from "react";
import InputArea from "./InputArea";
import ProduceCard from "./ProduceCard";
import styled from "styled-components";

const Cell = styled.div`
  background: ${(props) => (props.cellNum % 2 === 0 ? "white" : "#54f7f7")};
`;

const ProduceArea = styled.div`
  margin-top: 100px;
`;

const Container = styled.div`
  width: 100%;
`;

const ProduceContainer = (props) => {
  const [currentList, setCurrentList] = useState([]);

  return (
    <Container>
      <InputArea list={props.data} setCurrentList={setCurrentList} />
      <ProduceArea>
        {currentList.map((produceValue, index) => (
          <Cell key={index} cellNum={index}>
            <ProduceCard produceValue={produceValue} />
          </Cell>
        ))}
      </ProduceArea>
    </Container>
  );
};

export default ProduceContainer;

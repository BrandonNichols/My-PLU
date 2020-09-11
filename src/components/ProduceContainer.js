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

const ProduceContainer = (props) => {
  const [currentList, setCurrentList] = useState([]);

  return (
    <div>
      <InputArea list={props.data} setCurrentList={setCurrentList} />
      <ProduceArea>
        {!currentList.length
          ? props.data.map((produceValue, index) => (
              <Cell key={index} cellNum={index}>
                <ProduceCard produceValue={produceValue} />
              </Cell>
            ))
          : currentList.map((produceValue, index) => (
              <Cell key={index} cellNum={index}>
                <ProduceCard produceValue={produceValue} />
              </Cell>
            ))}
      </ProduceArea>
    </div>
  );
};

export default ProduceContainer;

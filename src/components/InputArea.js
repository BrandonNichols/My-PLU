import React, { useState } from "react";
import styled from "styled-components";

const FormArea = styled.div`
  top: 0;
  left: 45%;
  position: fixed;

  @media (max-width: 500) {
    left: 40%;
  }
`;

const InputArea = (props) => {
  const { list, setCurrentList } = props;
  const [produceInput, setProduceInput] = useState("");

  const handleInput = (e) => {
    setProduceInput(e.target.value);
    setCurrentList(
      list.filter((value) => {
        if (value.includes(e.target.value.toUpperCase())) {
          return value;
        }
      })
    );
  };

  return (
    <FormArea>
      <form>
        <input type="text" value={produceInput} onChange={handleInput} />
      </form>
    </FormArea>
  );
};

export default InputArea;

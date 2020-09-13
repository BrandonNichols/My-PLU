import React, { useState } from "react";
import styled from "styled-components";

const FormArea = styled.div`
  top: 0;
  left: 45%;
  position: fixed;

  @media (max-width: 500px) {
    left: 29%;
  }

  @media (max-width: 400px) {
    left: 26%;
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
        <input
          type="text"
          placeholder="PLU Number/Produce Name"
          value={produceInput}
          onChange={handleInput}
        />
      </form>
    </FormArea>
  );
};

export default InputArea;

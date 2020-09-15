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

const checkString = (input, list) => {
  const splitInput = input.split(" ");
  const inputLength = splitInput.length;
  let matchCount = 0;
  const filteredArray = [];

  list.forEach((produceString) => {
    splitInput.forEach((word) => {
      if (produceString.includes(word)) {
        matchCount++;
      }

      if (matchCount === inputLength) {
        filteredArray.push(produceString);
      }
    });
    matchCount = 0;
  });

  return filteredArray;
};

const InputArea = (props) => {
  const { list, setCurrentList } = props;
  const [produceInput, setProduceInput] = useState("");

  const handleInput = (e) => {
    setProduceInput(e.target.value);
    setCurrentList(checkString(e.target.value.toUpperCase(), list));
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

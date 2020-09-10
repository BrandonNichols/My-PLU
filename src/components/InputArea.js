import React, { useState } from "react";

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
    <div>
      <form>
        <input type="text" value={produceInput} onChange={handleInput} />
      </form>
    </div>
  );
};

export default InputArea;

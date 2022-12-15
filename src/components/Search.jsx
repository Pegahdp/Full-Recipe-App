import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
}

export default Search;

const FormStyle = styled.form`
  margin: 0rem 13rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2rem;
    border-radius: 1rem;
    padding: 1rem 3rem;
    outline: none;
    color: white;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 35%;
    left: 2%;
    transform: translate (100%, 50%);
    color: white;
    font-size: 1.2rem;
  }
`;

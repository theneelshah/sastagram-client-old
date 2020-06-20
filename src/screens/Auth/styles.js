import styled from "styled-components";

export const Heading = styled.h1`
  margin: 2rem auto;
  text-align: center;
  font-family: "Grand Hotel", cursive;
`;

export const Card = styled.div`
  position: relative;

  margin: 5rem auto;
  padding: 1.5rem;
  background: rgba(var(--d87, 255, 255, 255), 1);
`;

export const Form = styled.form`
  text-align: center;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid
    ${(props) =>
      props.error ? "transparent" : "rgba(var(--b6a, 219, 219, 219), 1)"};
  margin: 2rem auto;
  padding: 5px;
  display: block;
  width: 30%;
  transition: 0.2s all ease-in;
  background: rgba(var(--b3f, 250, 250, 250), 1);

  &:focus {
    border-bottom: 1px solid ${(props) => (props.error ? "red" : "blue")};
  }

  &::placeholder {
  }
`;

export const Button = styled.input`
  background: #0095f6;
  border: none;
  cursor: pointer;
  color: white;
  margin: 2rem auto;
  padding: 5px;
  display: block;
  width: 30%;
  transition: 0.2s all ease-in;
  &:disabled {
    background: #82c7f5;
    cursor: none;
  }
`;

export const ShowPassword = styled.div`
  width: 20px;
  height: 20px;
  background: red;
  position: absolute;
  right: 0;
  top: 0;
`;

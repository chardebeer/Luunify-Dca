import styled from "styled-components";
import Modal from "../Modal";

export const StyledModal = styled(Modal)`
  font-family: montserrat, arial;
  border-radius: 25px;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: 10px;
  background: linear-gradient(white 0%, white 30%, #bbb 30%, #bbb 100%);
  color: black;
  border-radius: 25px;
  width: 520px;
  height: 466px;
  display: block;
  margin: 12px auto;
  box-shadow: 1px 10px 10px #222;
  > h1 {
    padding-top: 35%;
  }
`;

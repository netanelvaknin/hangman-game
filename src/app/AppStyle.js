import styled from "styled-components/macro";
import { mobile } from "../utils/screen-sizes";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media ${mobile} {
    flex-direction: column;
  }
`;
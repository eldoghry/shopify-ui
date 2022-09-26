import styled from "styled-components";
import { tablet, xs } from "../responsive";

const Container = styled.div`
  height: 3rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  color: white;
  font-weight: 500;

  ${tablet({
    height: "5rem",
    fontSize: "1.8rem",
  })}

  ${xs({
    height: "5rem",
    fontSize: "1.5rem",
  })}
`;

const Announcement = () => {
  return <Container>Free Shipping on orders that exceed 200$</Container>;
};

export default Announcement;

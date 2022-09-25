import styled from "styled-components";

const Container = styled.div`
  height: 3rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  color: white;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Free Shipping on orders that exceed 200$</Container>;
};

export default Announcement;

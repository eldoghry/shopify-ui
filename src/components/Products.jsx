import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 30rem));
  justify-content: center;
  gap: 2rem;
`;

const Products = ({ products }) => {

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;

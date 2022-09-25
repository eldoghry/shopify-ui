import styled from "styled-components";
import { categories } from "../fakeData";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  height: 90vh;
  display: flex;
  gap: 0.8rem;
  padding: 1rem 0;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

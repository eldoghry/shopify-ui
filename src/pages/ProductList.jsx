import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const Heading = styled.h1`
  margin-bottom: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTittle = styled.span`
  font-size: 2.4rem;
  text-transform: capitalize;
  font-weight: 200;
  margin-right: 1rem;
`;
const Select = styled.select`
  padding: 0.8rem 1rem;
  border-color: lightgray;

  :not(:last-child) {
    margin-right: 1rem;
  }
`;

const Option = styled.option`
  font-size: 1.6rem;
  font-weight: 200;
`;

function ProductList() {
  return (
    <div>
      <Announcement />
      <Navbar />

      <Container>
        <Heading>T-Shirts</Heading>
        <FilterContainer>
          <Filter>
            <FilterTittle>filter product</FilterTittle>
            <Select>
              <Option disabled>Color</Option>
              <Option>red</Option>
              <Option>green</Option>
              <Option>blue</Option>
            </Select>

            <Select>
              <Option disabled>Size</Option>
              <Option>s</Option>
              <Option>m</Option>
              <Option>lg</Option>
            </Select>
          </Filter>

          <Filter>
            <FilterTittle>sort product</FilterTittle>
            <Select>
              <Option>newest</Option>
              <Option>price(asc)</Option>
              <Option>price(des)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
      </Container>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductList;

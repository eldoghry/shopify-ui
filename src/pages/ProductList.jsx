import Products from "../components/Products";
import styled from "styled-components";
import { mobile, xs } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
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

  ${xs({
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2rem",
    marginBottom: "2rem",
  })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    gap: "2rem",
  })}

  ${xs({
    flexDirection: "row",
  })}
`;

const FilterWrapper = styled.div`
  display: flex;
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
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filteredProduct, setFilteredProduct] = useState([]);

  console.log(location.pathname.split("/")[2]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/product/?categories=${category}`
        );
        console.log(res);
        setFilteredProduct(res.data);
      } catch (error) {}
    };

    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Heading>{category.toUpperCase()}</Heading>
        <FilterContainer>
          <Filter>
            <FilterTittle>filter product</FilterTittle>
            <FilterWrapper>
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
            </FilterWrapper>
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

        {filteredProduct.length && <Products products={filteredProduct} />}
      </Container>
    </div>
  );
}

export default ProductList;

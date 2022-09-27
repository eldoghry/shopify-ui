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
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [sort, setSort] = useState("newest");
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log("rerendering product list page");

        const res = await axios.get(
          `http://localhost:3000/api/product/${
            category ? "?categories=${category}" : ""
          }`
        );
        setProducts(
          res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        );

        setFilteredProduct(
          res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        );

        // setFilteredProduct([...products]);
      } catch (error) {}
    };

    getProducts();
  }, []);

  //Sorting
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduct([
        ...products.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
      ]);
    } else if (sort === "oldest") {
      setFilteredProduct([
        ...products.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        ),
      ]);
    } else if (sort === "price(asc)") {
      setFilteredProduct([...products.sort((a, b) => a.price - b.price)]);
    } else if (sort === "price(des)") {
      setFilteredProduct([...products.sort((a, b) => b.price - a.price)]);
    }
  }, [sort]);

  //filtering
  useEffect(() => {
    console.log(filteredProduct);
    if (size) {
      console.log("filtering by size");
      setFilteredProduct([...products.filter((item) => item.size === size)]);
    }
  }, [size]);

  return (
    <div>
      <Container>
        <Heading>{category ? category.toUpperCase() : "ALL PRODUCTS"}</Heading>
        <FilterContainer>
          <Filter>
            <FilterTittle>filter product</FilterTittle>
            <FilterWrapper>
              <Select onChange={(e) => setColor(e.target.value.toLowerCase())}>
                <Option disabled>Color</Option>
                <Option>red</Option>
                <Option>green</Option>
                <Option>blue</Option>
              </Select>

              <Select onChange={(e) => setSize(e.target.value.toLowerCase())}>
                <Option disabled>Size</Option>
                <Option>s</Option>
                <Option>m</Option>
                <Option>lg</Option>
              </Select>
            </FilterWrapper>
          </Filter>

          <Filter>
            <FilterTittle>sort product</FilterTittle>
            <Select onChange={(e) => setSort(e.target.value.toLowerCase())}>
              <Option>newest</Option>
              <Option>oldest</Option>
              <Option>price(asc)</Option>
              <Option>price(des)</Option>
            </Select>
          </Filter>
        </FilterContainer>

        {filteredProduct.length > 0 && <Products products={filteredProduct} />}
      </Container>
    </div>
  );
}

export default ProductList;
